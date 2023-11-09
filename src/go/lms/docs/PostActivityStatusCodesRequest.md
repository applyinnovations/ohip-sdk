# PostActivityStatusCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityStatusCodes** | Pointer to [**ActivityStatusCodesType**](ActivityStatusCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostActivityStatusCodesRequest

`func NewPostActivityStatusCodesRequest() *PostActivityStatusCodesRequest`

NewPostActivityStatusCodesRequest instantiates a new PostActivityStatusCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostActivityStatusCodesRequestWithDefaults

`func NewPostActivityStatusCodesRequestWithDefaults() *PostActivityStatusCodesRequest`

NewPostActivityStatusCodesRequestWithDefaults instantiates a new PostActivityStatusCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityStatusCodes

`func (o *PostActivityStatusCodesRequest) GetActivityStatusCodes() ActivityStatusCodesType`

GetActivityStatusCodes returns the ActivityStatusCodes field if non-nil, zero value otherwise.

### GetActivityStatusCodesOk

`func (o *PostActivityStatusCodesRequest) GetActivityStatusCodesOk() (*ActivityStatusCodesType, bool)`

GetActivityStatusCodesOk returns a tuple with the ActivityStatusCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityStatusCodes

`func (o *PostActivityStatusCodesRequest) SetActivityStatusCodes(v ActivityStatusCodesType)`

SetActivityStatusCodes sets ActivityStatusCodes field to given value.

### HasActivityStatusCodes

`func (o *PostActivityStatusCodesRequest) HasActivityStatusCodes() bool`

HasActivityStatusCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostActivityStatusCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostActivityStatusCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostActivityStatusCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostActivityStatusCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostActivityStatusCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostActivityStatusCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostActivityStatusCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostActivityStatusCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


