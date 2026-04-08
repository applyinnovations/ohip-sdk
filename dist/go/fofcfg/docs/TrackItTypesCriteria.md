# TrackItTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackItTypes** | Pointer to [**[]TrackItTypeConfigType**](TrackItTypeConfigType.md) | Track It Type Collection element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTrackItTypesCriteria

`func NewTrackItTypesCriteria() *TrackItTypesCriteria`

NewTrackItTypesCriteria instantiates a new TrackItTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItTypesCriteriaWithDefaults

`func NewTrackItTypesCriteriaWithDefaults() *TrackItTypesCriteria`

NewTrackItTypesCriteriaWithDefaults instantiates a new TrackItTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrackItTypes

`func (o *TrackItTypesCriteria) GetTrackItTypes() []TrackItTypeConfigType`

GetTrackItTypes returns the TrackItTypes field if non-nil, zero value otherwise.

### GetTrackItTypesOk

`func (o *TrackItTypesCriteria) GetTrackItTypesOk() (*[]TrackItTypeConfigType, bool)`

GetTrackItTypesOk returns a tuple with the TrackItTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItTypes

`func (o *TrackItTypesCriteria) SetTrackItTypes(v []TrackItTypeConfigType)`

SetTrackItTypes sets TrackItTypes field to given value.

### HasTrackItTypes

`func (o *TrackItTypesCriteria) HasTrackItTypes() bool`

HasTrackItTypes returns a boolean if a field has been set.

### GetLinks

`func (o *TrackItTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TrackItTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TrackItTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TrackItTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TrackItTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TrackItTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TrackItTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TrackItTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


