# BuildingFloorMappingsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildingFloorMappings** | Pointer to [**[]BuildingFloorMappingType**](BuildingFloorMappingType.md) | Collection of Floor to Building mapping details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBuildingFloorMappingsDetails

`func NewBuildingFloorMappingsDetails() *BuildingFloorMappingsDetails`

NewBuildingFloorMappingsDetails instantiates a new BuildingFloorMappingsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildingFloorMappingsDetailsWithDefaults

`func NewBuildingFloorMappingsDetailsWithDefaults() *BuildingFloorMappingsDetails`

NewBuildingFloorMappingsDetailsWithDefaults instantiates a new BuildingFloorMappingsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuildingFloorMappings

`func (o *BuildingFloorMappingsDetails) GetBuildingFloorMappings() []BuildingFloorMappingType`

GetBuildingFloorMappings returns the BuildingFloorMappings field if non-nil, zero value otherwise.

### GetBuildingFloorMappingsOk

`func (o *BuildingFloorMappingsDetails) GetBuildingFloorMappingsOk() (*[]BuildingFloorMappingType, bool)`

GetBuildingFloorMappingsOk returns a tuple with the BuildingFloorMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuildingFloorMappings

`func (o *BuildingFloorMappingsDetails) SetBuildingFloorMappings(v []BuildingFloorMappingType)`

SetBuildingFloorMappings sets BuildingFloorMappings field to given value.

### HasBuildingFloorMappings

`func (o *BuildingFloorMappingsDetails) HasBuildingFloorMappings() bool`

HasBuildingFloorMappings returns a boolean if a field has been set.

### GetLinks

`func (o *BuildingFloorMappingsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BuildingFloorMappingsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BuildingFloorMappingsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BuildingFloorMappingsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BuildingFloorMappingsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BuildingFloorMappingsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BuildingFloorMappingsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BuildingFloorMappingsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

