# PostWashScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 
**WashCodes** | Pointer to [**WashCodesType**](WashCodesType.md) |  | [optional] 

## Methods

### NewPostWashScheduleRequest

`func NewPostWashScheduleRequest() *PostWashScheduleRequest`

NewPostWashScheduleRequest instantiates a new PostWashScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostWashScheduleRequestWithDefaults

`func NewPostWashScheduleRequestWithDefaults() *PostWashScheduleRequest`

NewPostWashScheduleRequestWithDefaults instantiates a new PostWashScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostWashScheduleRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostWashScheduleRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostWashScheduleRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostWashScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostWashScheduleRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostWashScheduleRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostWashScheduleRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostWashScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetWashCodes

`func (o *PostWashScheduleRequest) GetWashCodes() WashCodesType`

GetWashCodes returns the WashCodes field if non-nil, zero value otherwise.

### GetWashCodesOk

`func (o *PostWashScheduleRequest) GetWashCodesOk() (*WashCodesType, bool)`

GetWashCodesOk returns a tuple with the WashCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashCodes

`func (o *PostWashScheduleRequest) SetWashCodes(v WashCodesType)`

SetWashCodes sets WashCodes field to given value.

### HasWashCodes

`func (o *PostWashScheduleRequest) HasWashCodes() bool`

HasWashCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


