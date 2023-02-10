// autotest for method swapi.dev/api/people/10

pm.test("Имя_человека", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});

pm.test("Вес_человека", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.mass).to.eql('77');
});

pm.test("Пол_человека", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gender).to.eql('male');
});

// autotest for method https://auth.timetta.com/connect/token

var jsonData = JSON.parse(responseBody);
pm.collectionVariables.set("access_token", jsonData.access_token);