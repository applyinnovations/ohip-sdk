# PostTraceTextsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TraceTexts** | Pointer to [**TraceTextsType**](TraceTextsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostTraceTextsRequest

`func NewPostTraceTextsRequest() *PostTraceTextsRequest`

NewPostTraceTextsRequest instantiates a new PostTraceTextsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTraceTextsRequestWithDefaults

`func NewPostTraceTextsRequestWithDefaults() *PostTraceTextsRequest`

NewPostTraceTextsRequestWithDefaults instantiates a new PostTraceTextsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTraceTextsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTraceTextsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTraceTextsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTraceTextsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTraceTexts

`func (o *PostTraceTextsRequest) GetTraceTexts() TraceTextsType`

GetTraceTexts returns the TraceTexts field if non-nil, zero value otherwise.

### GetTraceTextsOk

`func (o *PostTraceTextsRequest) GetTraceTextsOk() (*TraceTextsType, bool)`

GetTraceTextsOk returns a tuple with the TraceTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTexts

`func (o *PostTraceTextsRequest) SetTraceTexts(v TraceTextsType)`

SetTraceTexts sets TraceTexts field to given value.

### HasTraceTexts

`func (o *PostTraceTextsRequest) HasTraceTexts() bool`

HasTraceTexts returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTraceTextsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTraceTextsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTraceTextsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTraceTextsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


