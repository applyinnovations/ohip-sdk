# WaitlistCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WaitlistCodes** | Pointer to [**[]WaitlistCodeType**](WaitlistCodeType.md) | List of Waitlist Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewWaitlistCodesToBeChanged

`func NewWaitlistCodesToBeChanged() *WaitlistCodesToBeChanged`

NewWaitlistCodesToBeChanged instantiates a new WaitlistCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWaitlistCodesToBeChangedWithDefaults

`func NewWaitlistCodesToBeChangedWithDefaults() *WaitlistCodesToBeChanged`

NewWaitlistCodesToBeChangedWithDefaults instantiates a new WaitlistCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWaitlistCodes

`func (o *WaitlistCodesToBeChanged) GetWaitlistCodes() []WaitlistCodeType`

GetWaitlistCodes returns the WaitlistCodes field if non-nil, zero value otherwise.

### GetWaitlistCodesOk

`func (o *WaitlistCodesToBeChanged) GetWaitlistCodesOk() (*[]WaitlistCodeType, bool)`

GetWaitlistCodesOk returns a tuple with the WaitlistCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistCodes

`func (o *WaitlistCodesToBeChanged) SetWaitlistCodes(v []WaitlistCodeType)`

SetWaitlistCodes sets WaitlistCodes field to given value.

### HasWaitlistCodes

`func (o *WaitlistCodesToBeChanged) HasWaitlistCodes() bool`

HasWaitlistCodes returns a boolean if a field has been set.

### GetLinks

`func (o *WaitlistCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *WaitlistCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *WaitlistCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *WaitlistCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *WaitlistCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *WaitlistCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *WaitlistCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *WaitlistCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


