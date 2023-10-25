# PostTrackItActionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItActions** | Pointer to [**[]TrackItActionConfigType**](TrackItActionConfigType.md) | Track It Action Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTrackItActionsRequest

`func NewPostTrackItActionsRequest() *PostTrackItActionsRequest`

NewPostTrackItActionsRequest instantiates a new PostTrackItActionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTrackItActionsRequestWithDefaults

`func NewPostTrackItActionsRequestWithDefaults() *PostTrackItActionsRequest`

NewPostTrackItActionsRequestWithDefaults instantiates a new PostTrackItActionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTrackItActionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTrackItActionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTrackItActionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTrackItActionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItActions

`func (o *PostTrackItActionsRequest) GetTrackItActions() []TrackItActionConfigType`

GetTrackItActions returns the TrackItActions field if non-nil, zero value otherwise.

### GetTrackItActionsOk

`func (o *PostTrackItActionsRequest) GetTrackItActionsOk() (*[]TrackItActionConfigType, bool)`

GetTrackItActionsOk returns a tuple with the TrackItActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItActions

`func (o *PostTrackItActionsRequest) SetTrackItActions(v []TrackItActionConfigType)`

SetTrackItActions sets TrackItActions field to given value.

### HasTrackItActions

`func (o *PostTrackItActionsRequest) HasTrackItActions() bool`

HasTrackItActions returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTrackItActionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTrackItActionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTrackItActionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTrackItActionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


