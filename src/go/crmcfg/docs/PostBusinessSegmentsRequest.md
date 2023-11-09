# PostBusinessSegmentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessSegments** | Pointer to [**BusinessSegmentsType**](BusinessSegmentsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBusinessSegmentsRequest

`func NewPostBusinessSegmentsRequest() *PostBusinessSegmentsRequest`

NewPostBusinessSegmentsRequest instantiates a new PostBusinessSegmentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBusinessSegmentsRequestWithDefaults

`func NewPostBusinessSegmentsRequestWithDefaults() *PostBusinessSegmentsRequest`

NewPostBusinessSegmentsRequestWithDefaults instantiates a new PostBusinessSegmentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessSegments

`func (o *PostBusinessSegmentsRequest) GetBusinessSegments() BusinessSegmentsType`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *PostBusinessSegmentsRequest) GetBusinessSegmentsOk() (*BusinessSegmentsType, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *PostBusinessSegmentsRequest) SetBusinessSegments(v BusinessSegmentsType)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *PostBusinessSegmentsRequest) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetLinks

`func (o *PostBusinessSegmentsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBusinessSegmentsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBusinessSegmentsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBusinessSegmentsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBusinessSegmentsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBusinessSegmentsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBusinessSegmentsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBusinessSegmentsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


