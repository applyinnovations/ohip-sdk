# CancellationCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationCodes** | Pointer to [**[]CancellationCodeType**](CancellationCodeType.md) | List of Cancellation Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCancellationCodesDetails

`func NewCancellationCodesDetails() *CancellationCodesDetails`

NewCancellationCodesDetails instantiates a new CancellationCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationCodesDetailsWithDefaults

`func NewCancellationCodesDetailsWithDefaults() *CancellationCodesDetails`

NewCancellationCodesDetailsWithDefaults instantiates a new CancellationCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationCodes

`func (o *CancellationCodesDetails) GetCancellationCodes() []CancellationCodeType`

GetCancellationCodes returns the CancellationCodes field if non-nil, zero value otherwise.

### GetCancellationCodesOk

`func (o *CancellationCodesDetails) GetCancellationCodesOk() (*[]CancellationCodeType, bool)`

GetCancellationCodesOk returns a tuple with the CancellationCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCodes

`func (o *CancellationCodesDetails) SetCancellationCodes(v []CancellationCodeType)`

SetCancellationCodes sets CancellationCodes field to given value.

### HasCancellationCodes

`func (o *CancellationCodesDetails) HasCancellationCodes() bool`

HasCancellationCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CancellationCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancellationCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancellationCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancellationCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CancellationCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancellationCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancellationCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancellationCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

