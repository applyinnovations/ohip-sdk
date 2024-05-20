# SetBuildingFloorMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildingFloorMappings** | Pointer to [**[]BuildingFloorMappingType**](BuildingFloorMappingType.md) | Collection of Floor to Building mapping details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetBuildingFloorMappings

`func NewSetBuildingFloorMappings() *SetBuildingFloorMappings`

NewSetBuildingFloorMappings instantiates a new SetBuildingFloorMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetBuildingFloorMappingsWithDefaults

`func NewSetBuildingFloorMappingsWithDefaults() *SetBuildingFloorMappings`

NewSetBuildingFloorMappingsWithDefaults instantiates a new SetBuildingFloorMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildingFloorMappings

`func (o *SetBuildingFloorMappings) GetBuildingFloorMappings() []BuildingFloorMappingType`

GetBuildingFloorMappings returns the BuildingFloorMappings field if non-nil, zero value otherwise.

### GetBuildingFloorMappingsOk

`func (o *SetBuildingFloorMappings) GetBuildingFloorMappingsOk() (*[]BuildingFloorMappingType, bool)`

GetBuildingFloorMappingsOk returns a tuple with the BuildingFloorMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildingFloorMappings

`func (o *SetBuildingFloorMappings) SetBuildingFloorMappings(v []BuildingFloorMappingType)`

SetBuildingFloorMappings sets BuildingFloorMappings field to given value.

### HasBuildingFloorMappings

`func (o *SetBuildingFloorMappings) HasBuildingFloorMappings() bool`

HasBuildingFloorMappings returns a boolean if a field has been set.

### GetLinks

`func (o *SetBuildingFloorMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetBuildingFloorMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetBuildingFloorMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetBuildingFloorMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetBuildingFloorMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetBuildingFloorMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetBuildingFloorMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetBuildingFloorMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


