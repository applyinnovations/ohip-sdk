# ChangeMailingActionCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MailingActionCodes** | Pointer to [**[]MailingActionCodeType**](MailingActionCodeType.md) | List of Mailing Action Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeMailingActionCodesRequest

`func NewChangeMailingActionCodesRequest() *ChangeMailingActionCodesRequest`

NewChangeMailingActionCodesRequest instantiates a new ChangeMailingActionCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeMailingActionCodesRequestWithDefaults

`func NewChangeMailingActionCodesRequestWithDefaults() *ChangeMailingActionCodesRequest`

NewChangeMailingActionCodesRequestWithDefaults instantiates a new ChangeMailingActionCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeMailingActionCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeMailingActionCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeMailingActionCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeMailingActionCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMailingActionCodes

`func (o *ChangeMailingActionCodesRequest) GetMailingActionCodes() []MailingActionCodeType`

GetMailingActionCodes returns the MailingActionCodes field if non-nil, zero value otherwise.

### GetMailingActionCodesOk

`func (o *ChangeMailingActionCodesRequest) GetMailingActionCodesOk() (*[]MailingActionCodeType, bool)`

GetMailingActionCodesOk returns a tuple with the MailingActionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActionCodes

`func (o *ChangeMailingActionCodesRequest) SetMailingActionCodes(v []MailingActionCodeType)`

SetMailingActionCodes sets MailingActionCodes field to given value.

### HasMailingActionCodes

`func (o *ChangeMailingActionCodesRequest) HasMailingActionCodes() bool`

HasMailingActionCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeMailingActionCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeMailingActionCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeMailingActionCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeMailingActionCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


