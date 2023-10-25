# PostCancellationCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationCodes** | Pointer to [**[]CancellationCodeType**](CancellationCodeType.md) | List of Cancellation Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCancellationCodesRequest

`func NewPostCancellationCodesRequest() *PostCancellationCodesRequest`

NewPostCancellationCodesRequest instantiates a new PostCancellationCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCancellationCodesRequestWithDefaults

`func NewPostCancellationCodesRequestWithDefaults() *PostCancellationCodesRequest`

NewPostCancellationCodesRequestWithDefaults instantiates a new PostCancellationCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationCodes

`func (o *PostCancellationCodesRequest) GetCancellationCodes() []CancellationCodeType`

GetCancellationCodes returns the CancellationCodes field if non-nil, zero value otherwise.

### GetCancellationCodesOk

`func (o *PostCancellationCodesRequest) GetCancellationCodesOk() (*[]CancellationCodeType, bool)`

GetCancellationCodesOk returns a tuple with the CancellationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCodes

`func (o *PostCancellationCodesRequest) SetCancellationCodes(v []CancellationCodeType)`

SetCancellationCodes sets CancellationCodes field to given value.

### HasCancellationCodes

`func (o *PostCancellationCodesRequest) HasCancellationCodes() bool`

HasCancellationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostCancellationCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCancellationCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCancellationCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCancellationCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCancellationCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCancellationCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCancellationCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCancellationCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


