# CopyTrackItActionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TrackItActions** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of Track it Actions to be copied. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyTrackItActionsRequest

`func NewCopyTrackItActionsRequest() *CopyTrackItActionsRequest`

NewCopyTrackItActionsRequest instantiates a new CopyTrackItActionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTrackItActionsRequestWithDefaults

`func NewCopyTrackItActionsRequestWithDefaults() *CopyTrackItActionsRequest`

NewCopyTrackItActionsRequestWithDefaults instantiates a new CopyTrackItActionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTrackItActionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTrackItActionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTrackItActionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTrackItActionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItActions

`func (o *CopyTrackItActionsRequest) GetTrackItActions() []CopyConfigurationCodeType`

GetTrackItActions returns the TrackItActions field if non-nil, zero value otherwise.

### GetTrackItActionsOk

`func (o *CopyTrackItActionsRequest) GetTrackItActionsOk() (*[]CopyConfigurationCodeType, bool)`

GetTrackItActionsOk returns a tuple with the TrackItActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItActions

`func (o *CopyTrackItActionsRequest) SetTrackItActions(v []CopyConfigurationCodeType)`

SetTrackItActions sets TrackItActions field to given value.

### HasTrackItActions

`func (o *CopyTrackItActionsRequest) HasTrackItActions() bool`

HasTrackItActions returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTrackItActionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTrackItActionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTrackItActionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTrackItActionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


