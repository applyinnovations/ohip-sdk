# PostWaitlistCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**WaitlistCodes** | Pointer to [**WaitlistCodesType**](WaitlistCodesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostWaitlistCodesRequest

`func NewPostWaitlistCodesRequest() *PostWaitlistCodesRequest`

NewPostWaitlistCodesRequest instantiates a new PostWaitlistCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostWaitlistCodesRequestWithDefaults

`func NewPostWaitlistCodesRequestWithDefaults() *PostWaitlistCodesRequest`

NewPostWaitlistCodesRequestWithDefaults instantiates a new PostWaitlistCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostWaitlistCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostWaitlistCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostWaitlistCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostWaitlistCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWaitlistCodes

`func (o *PostWaitlistCodesRequest) GetWaitlistCodes() WaitlistCodesType`

GetWaitlistCodes returns the WaitlistCodes field if non-nil, zero value otherwise.

### GetWaitlistCodesOk

`func (o *PostWaitlistCodesRequest) GetWaitlistCodesOk() (*WaitlistCodesType, bool)`

GetWaitlistCodesOk returns a tuple with the WaitlistCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistCodes

`func (o *PostWaitlistCodesRequest) SetWaitlistCodes(v WaitlistCodesType)`

SetWaitlistCodes sets WaitlistCodes field to given value.

### HasWaitlistCodes

`func (o *PostWaitlistCodesRequest) HasWaitlistCodes() bool`

HasWaitlistCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostWaitlistCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostWaitlistCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostWaitlistCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostWaitlistCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


