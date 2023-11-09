# CheckedRateCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Checks** | Pointer to [**PostRateCodeCheckType**](PostRateCodeCheckType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCheckedRateCode

`func NewCheckedRateCode() *CheckedRateCode`

NewCheckedRateCode instantiates a new CheckedRateCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckedRateCodeWithDefaults

`func NewCheckedRateCodeWithDefaults() *CheckedRateCode`

NewCheckedRateCodeWithDefaults instantiates a new CheckedRateCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChecks

`func (o *CheckedRateCode) GetChecks() PostRateCodeCheckType`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *CheckedRateCode) GetChecksOk() (*PostRateCodeCheckType, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *CheckedRateCode) SetChecks(v PostRateCodeCheckType)`

SetChecks sets Checks field to given value.

### HasChecks

`func (o *CheckedRateCode) HasChecks() bool`

HasChecks returns a boolean if a field has been set.

### GetLinks

`func (o *CheckedRateCode) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckedRateCode) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckedRateCode) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckedRateCode) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckedRateCode) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckedRateCode) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckedRateCode) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckedRateCode) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


