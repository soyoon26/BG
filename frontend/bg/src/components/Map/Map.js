import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const KakaoMap = () => {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2523a5383667a403ac6f60504a437b1f&libraries=services&autoload=false";
    script.async = true;
    script.onload = initializeKakaoMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeKakaoMap = () => {
    window.kakao.maps.load(() => {
      searchPlaces();
    });
  };

  const searchPlaces = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  };

  const placesSearchCB = (data, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const bounds = new window.kakao.maps.LatLngBounds();
      const addMarkers = [];

      data.forEach((place) => {
        const position = new window.kakao.maps.LatLng(place.y, place.x);
        addMarkers.push({
          position,
          content: place.place_name,
        });
        bounds.extend(position);
      });

      setMarkers(addMarkers);
      if (map) map.setBounds(bounds);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  return (
    <MapSection>
      <Map
        center={{ lat: 37.566826, lng: 126.9786567 }}
        style={{ width: "100%", height: "100%" }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker, index) => (
          <MapMarker
            key={`marker-${index}`}
            position={marker.position}
            onClick={() => {
              // 마커 클릭 시 처리
            }}
          >
            {marker.content}
          </MapMarker>
        ))}
      </Map>
      <MenuWrap>
        <div className="option">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                searchPlaces();
              }}
            >
              키워드 :{" "}
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                size="15"
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </MenuWrap>
    </MapSection>
  );
};

const MapSection = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 20px);
`;

const MenuWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  z-index: 1000;
`;

export default KakaoMap;
