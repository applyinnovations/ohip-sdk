# ChangeBusinessSegmentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessSegments** | Pointer to [**BusinessSegmentsType**](BusinessSegmentsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeBusinessSegmentsRequest

`func NewChangeBusinessSegmentsRequest() *ChangeBusinessSegmentsRequest`

NewChangeBusinessSegmentsRequest instantiates a new ChangeBusinessSegmentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBusinessSegmentsRequestWithDefaults

`func NewChangeBusinessSegmentsRequestWithDefaults() *ChangeBusinessSegmentsRequest`

NewChangeBusinessSegmentsRequestWithDefaults instantiates a new ChangeBusinessSegmentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessSegments

`func (o *ChangeBusinessSegmentsRequest) GetBusinessSegments() BusinessSegmentsType`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *ChangeBusinessSegmentsRequest) GetBusinessSegmentsOk() (*BusinessSegmentsType, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *ChangeBusinessSegmentsRequest) SetBusinessSegments(v BusinessSegmentsType)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *ChangeBusinessSegmentsRequest) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeBusinessSegmentsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeBusinessSegmentsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeBusinessSegmentsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeBusinessSegmentsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeBusinessSegmentsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeBusinessSegmentsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeBusinessSegmentsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeBusinessSegmentsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


