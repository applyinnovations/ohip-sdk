# BuildingsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Buildings** | Pointer to [**BuildingsType**](BuildingsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewBuildingsCriteria

`func NewBuildingsCriteria() *BuildingsCriteria`

NewBuildingsCriteria instantiates a new BuildingsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildingsCriteriaWithDefaults

`func NewBuildingsCriteriaWithDefaults() *BuildingsCriteria`

NewBuildingsCriteriaWithDefaults instantiates a new BuildingsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildings

`func (o *BuildingsCriteria) GetBuildings() BuildingsType`

GetBuildings returns the Buildings field if non-nil, zero value otherwise.

### GetBuildingsOk

`func (o *BuildingsCriteria) GetBuildingsOk() (*BuildingsType, bool)`

GetBuildingsOk returns a tuple with the Buildings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildings

`func (o *BuildingsCriteria) SetBuildings(v BuildingsType)`

SetBuildings sets Buildings field to given value.

### HasBuildings

`func (o *BuildingsCriteria) HasBuildings() bool`

HasBuildings returns a boolean if a field has been set.

### GetLinks

`func (o *BuildingsCriteria) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BuildingsCriteria) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BuildingsCriteria) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BuildingsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BuildingsCriteria) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BuildingsCriteria) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BuildingsCriteria) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BuildingsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


