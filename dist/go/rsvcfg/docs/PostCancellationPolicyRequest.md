# PostCancellationPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancelPenalty** | Pointer to [**HotelConfigCancelPenaltiesType**](HotelConfigCancelPenaltiesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCancellationPolicyRequest

`func NewPostCancellationPolicyRequest() *PostCancellationPolicyRequest`

NewPostCancellationPolicyRequest instantiates a new PostCancellationPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCancellationPolicyRequestWithDefaults

`func NewPostCancellationPolicyRequestWithDefaults() *PostCancellationPolicyRequest`

NewPostCancellationPolicyRequestWithDefaults instantiates a new PostCancellationPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancelPenalty

`func (o *PostCancellationPolicyRequest) GetCancelPenalty() HotelConfigCancelPenaltiesType`

GetCancelPenalty returns the CancelPenalty field if non-nil, zero value otherwise.

### GetCancelPenaltyOk

`func (o *PostCancellationPolicyRequest) GetCancelPenaltyOk() (*HotelConfigCancelPenaltiesType, bool)`

GetCancelPenaltyOk returns a tuple with the CancelPenalty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenalty

`func (o *PostCancellationPolicyRequest) SetCancelPenalty(v HotelConfigCancelPenaltiesType)`

SetCancelPenalty sets CancelPenalty field to given value.

### HasCancelPenalty

`func (o *PostCancellationPolicyRequest) HasCancelPenalty() bool`

HasCancelPenalty returns a boolean if a field has been set.

### GetLinks

`func (o *PostCancellationPolicyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCancellationPolicyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCancellationPolicyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCancellationPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCancellationPolicyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCancellationPolicyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCancellationPolicyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCancellationPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


