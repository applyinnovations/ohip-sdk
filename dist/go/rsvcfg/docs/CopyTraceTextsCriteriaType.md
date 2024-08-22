# CopyTraceTextsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetHotels** | Pointer to **[]string** | Hotel code. | [optional] 
**TraceTexts** | Pointer to [**[]TraceTextType**](TraceTextType.md) | Collection of trace texts. | [optional] 

## Methods

### NewCopyTraceTextsCriteriaType

`func NewCopyTraceTextsCriteriaType() *CopyTraceTextsCriteriaType`

NewCopyTraceTextsCriteriaType instantiates a new CopyTraceTextsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTraceTextsCriteriaTypeWithDefaults

`func NewCopyTraceTextsCriteriaTypeWithDefaults() *CopyTraceTextsCriteriaType`

NewCopyTraceTextsCriteriaTypeWithDefaults instantiates a new CopyTraceTextsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTargetHotels

`func (o *CopyTraceTextsCriteriaType) GetTargetHotels() []string`

GetTargetHotels returns the TargetHotels field if non-nil, zero value otherwise.

### GetTargetHotelsOk

`func (o *CopyTraceTextsCriteriaType) GetTargetHotelsOk() (*[]string, bool)`

GetTargetHotelsOk returns a tuple with the TargetHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotels

`func (o *CopyTraceTextsCriteriaType) SetTargetHotels(v []string)`

SetTargetHotels sets TargetHotels field to given value.

### HasTargetHotels

`func (o *CopyTraceTextsCriteriaType) HasTargetHotels() bool`

HasTargetHotels returns a boolean if a field has been set.

### GetTraceTexts

`func (o *CopyTraceTextsCriteriaType) GetTraceTexts() []TraceTextType`

GetTraceTexts returns the TraceTexts field if non-nil, zero value otherwise.

### GetTraceTextsOk

`func (o *CopyTraceTextsCriteriaType) GetTraceTextsOk() (*[]TraceTextType, bool)`

GetTraceTextsOk returns a tuple with the TraceTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTexts

`func (o *CopyTraceTextsCriteriaType) SetTraceTexts(v []TraceTextType)`

SetTraceTexts sets TraceTexts field to given value.

### HasTraceTexts

`func (o *CopyTraceTextsCriteriaType) HasTraceTexts() bool`

HasTraceTexts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


