import React, { useEffect, useState } from "react";
import "./MapSearch.css";

const MapSearch = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infowindow, setInfowindow] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2523a5383667a403ac6f60504a437b1f&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      if (kakao) {
        kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
          };
          const mapInstance = new kakao.maps.Map(mapContainer, options);
          setMap(mapInstance);

          const infowindowInstance = new kakao.maps.InfoWindow({ zIndex: 1 });
          setInfowindow(infowindowInstance);
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const searchPlaces = (keyword) => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const displayPlaces = (places) => {
    const listEl = document.getElementById("placesList");
    const menuEl = document.getElementById("menu_wrap");
    const fragment = document.createDocumentFragment();
    const bounds = new window.kakao.maps.LatLngBounds();
    let listStr = "";

    removeAllChildNods(listEl);
    removeMarker();

    for (let i = 0; i < places.length; i++) {
      const placePosition = new window.kakao.maps.LatLng(
        places[i].y,
        places[i].x
      );
      const marker = addMarker(placePosition, i);
      const itemEl = getListItem(i, places[i]);

      bounds.extend(placePosition);

      (function (marker, title) {
        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          displayInfowindow(marker, title);
        });

        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          infowindow.close();
        });

        itemEl.onmouseover = () => {
          displayInfowindow(marker, title);
        };

        itemEl.onmouseout = () => {
          infowindow.close();
        };
      })(marker, places[i].place_name);

      fragment.appendChild(itemEl);
    }

    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;
    map.setBounds(bounds);
  };

  const getListItem = (index, places) => {
    const el = document.createElement("li");
    let itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "   <h5>" +
      places.place_name +
      "</h5>";

    if (places.road_address_name) {
      itemStr +=
        "    <span>" +
        places.road_address_name +
        "</span>" +
        '   <span class="jibun gray">' +
        places.address_name +
        "</span>";
    } else {
      itemStr += "    <span>" + places.address_name + "</span>";
    }

    itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

    el.innerHTML = itemStr;
    el.className = "item";

    return el;
  };

  const addMarker = (position, idx, title) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    );
    const marker = new window.kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

    marker.setMap(map);
    setMarkers([...markers, marker]);

    return marker;
  };

  const removeMarker = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  const displayPagination = (pagination) => {
    const paginationEl = document.getElementById("pagination");
    const fragment = document.createDocumentFragment();

    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild(paginationEl.lastChild);
    }

    for (let i = 1; i <= pagination.last; i++) {
      const el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = () => {
          pagination.gotoPage(i);
        };
      }

      fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
  };

  const displayInfowindow = (marker, title) => {
    const content = '<div style="padding:5px;z-index:1;">' + title + "</div>";

    infowindow.setContent(content);
    infowindow.open(map, marker);
  };

  const removeAllChildNods = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  };

  return (
    <div className="map_wrap">
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      ></div>

      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const keyword = e.target.keyword.value;
                searchPlaces(keyword);
              }}
            >
              키워드 :{" "}
              <input
                type="text"
                defaultValue="서울 병원"
                id="keyword"
                size="15"
              ></input>
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr></hr>
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default MapSearch;
