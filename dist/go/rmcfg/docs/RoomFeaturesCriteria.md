# RoomFeaturesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomFeatures** | Pointer to [**[]RoomFeatureConfigType**](RoomFeatureConfigType.md) | Room feature details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomFeaturesCriteria

`func NewRoomFeaturesCriteria() *RoomFeaturesCriteria`

NewRoomFeaturesCriteria instantiates a new RoomFeaturesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeaturesCriteriaWithDefaults

`func NewRoomFeaturesCriteriaWithDefaults() *RoomFeaturesCriteria`

NewRoomFeaturesCriteriaWithDefaults instantiates a new RoomFeaturesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomFeatures

`func (o *RoomFeaturesCriteria) GetRoomFeatures() []RoomFeatureConfigType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *RoomFeaturesCriteria) GetRoomFeaturesOk() (*[]RoomFeatureConfigType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *RoomFeaturesCriteria) SetRoomFeatures(v []RoomFeatureConfigType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *RoomFeaturesCriteria) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetLinks

`func (o *RoomFeaturesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomFeaturesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomFeaturesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomFeaturesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomFeaturesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomFeaturesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomFeaturesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomFeaturesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


