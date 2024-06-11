function kakaomapSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const googleSearchUrl = `https://map.kakao.com/link/search/${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
    }