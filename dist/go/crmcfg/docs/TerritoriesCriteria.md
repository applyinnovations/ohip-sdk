# TerritoriesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Territories** | Pointer to [**[]TerritoryType**](TerritoryType.md) | List of Territories. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTerritoriesCriteria

`func NewTerritoriesCriteria() *TerritoriesCriteria`

NewTerritoriesCriteria instantiates a new TerritoriesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTerritoriesCriteriaWithDefaults

`func NewTerritoriesCriteriaWithDefaults() *TerritoriesCriteria`

NewTerritoriesCriteriaWithDefaults instantiates a new TerritoriesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerritories

`func (o *TerritoriesCriteria) GetTerritories() []TerritoryType`

GetTerritories returns the Territories field if non-nil, zero value otherwise.

### GetTerritoriesOk

`func (o *TerritoriesCriteria) GetTerritoriesOk() (*[]TerritoryType, bool)`

GetTerritoriesOk returns a tuple with the Territories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerritories

`func (o *TerritoriesCriteria) SetTerritories(v []TerritoryType)`

SetTerritories sets Territories field to given value.

### HasTerritories

`func (o *TerritoriesCriteria) HasTerritories() bool`

HasTerritories returns a boolean if a field has been set.

### GetLinks

`func (o *TerritoriesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TerritoriesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TerritoriesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TerritoriesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TerritoriesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TerritoriesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TerritoriesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TerritoriesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


