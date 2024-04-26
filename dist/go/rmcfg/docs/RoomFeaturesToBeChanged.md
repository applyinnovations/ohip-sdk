# RoomFeaturesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureConfigType**](RoomFeatureConfigType.md) | Room feature details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomFeaturesToBeChanged

`func NewRoomFeaturesToBeChanged() *RoomFeaturesToBeChanged`

NewRoomFeaturesToBeChanged instantiates a new RoomFeaturesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeaturesToBeChangedWithDefaults

`func NewRoomFeaturesToBeChangedWithDefaults() *RoomFeaturesToBeChanged`

NewRoomFeaturesToBeChangedWithDefaults instantiates a new RoomFeaturesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomFeaturesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomFeaturesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomFeaturesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomFeaturesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *RoomFeaturesToBeChanged) GetRoomFeatures() []RoomFeatureConfigType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *RoomFeaturesToBeChanged) GetRoomFeaturesOk() (*[]RoomFeatureConfigType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *RoomFeaturesToBeChanged) SetRoomFeatures(v []RoomFeatureConfigType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *RoomFeaturesToBeChanged) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomFeaturesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomFeaturesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomFeaturesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomFeaturesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


