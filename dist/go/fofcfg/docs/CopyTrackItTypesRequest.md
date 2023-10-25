# CopyTrackItTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItTypes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of Track it Types to be copied. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTrackItTypesRequest

`func NewCopyTrackItTypesRequest() *CopyTrackItTypesRequest`

NewCopyTrackItTypesRequest instantiates a new CopyTrackItTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTrackItTypesRequestWithDefaults

`func NewCopyTrackItTypesRequestWithDefaults() *CopyTrackItTypesRequest`

NewCopyTrackItTypesRequestWithDefaults instantiates a new CopyTrackItTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTrackItTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTrackItTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTrackItTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTrackItTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItTypes

`func (o *CopyTrackItTypesRequest) GetTrackItTypes() []CopyConfigurationCodeType`

GetTrackItTypes returns the TrackItTypes field if non-nil, zero value otherwise.

### GetTrackItTypesOk

`func (o *CopyTrackItTypesRequest) GetTrackItTypesOk() (*[]CopyConfigurationCodeType, bool)`

GetTrackItTypesOk returns a tuple with the TrackItTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItTypes

`func (o *CopyTrackItTypesRequest) SetTrackItTypes(v []CopyConfigurationCodeType)`

SetTrackItTypes sets TrackItTypes field to given value.

### HasTrackItTypes

`func (o *CopyTrackItTypesRequest) HasTrackItTypes() bool`

HasTrackItTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTrackItTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTrackItTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTrackItTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTrackItTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


