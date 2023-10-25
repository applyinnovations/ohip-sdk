# TerritoriesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Territories** | Pointer to [**[]TerritoryType**](TerritoryType.md) | List of Territories. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTerritoriesDetails

`func NewTerritoriesDetails() *TerritoriesDetails`

NewTerritoriesDetails instantiates a new TerritoriesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerritoriesDetailsWithDefaults

`func NewTerritoriesDetailsWithDefaults() *TerritoriesDetails`

NewTerritoriesDetailsWithDefaults instantiates a new TerritoriesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TerritoriesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TerritoriesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TerritoriesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TerritoriesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTerritories

`func (o *TerritoriesDetails) GetTerritories() []TerritoryType`

GetTerritories returns the Territories field if non-nil, zero value otherwise.

### GetTerritoriesOk

`func (o *TerritoriesDetails) GetTerritoriesOk() (*[]TerritoryType, bool)`

GetTerritoriesOk returns a tuple with the Territories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritories

`func (o *TerritoriesDetails) SetTerritories(v []TerritoryType)`

SetTerritories sets Territories field to given value.

### HasTerritories

`func (o *TerritoriesDetails) HasTerritories() bool`

HasTerritories returns a boolean if a field has been set.

### GetWarnings

`func (o *TerritoriesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TerritoriesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TerritoriesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TerritoriesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


