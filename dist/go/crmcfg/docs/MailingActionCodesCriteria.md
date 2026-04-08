# MailingActionCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MailingActionCodes** | Pointer to [**[]MailingActionCodeType**](MailingActionCodeType.md) | List of Mailing Action Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMailingActionCodesCriteria

`func NewMailingActionCodesCriteria() *MailingActionCodesCriteria`

NewMailingActionCodesCriteria instantiates a new MailingActionCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMailingActionCodesCriteriaWithDefaults

`func NewMailingActionCodesCriteriaWithDefaults() *MailingActionCodesCriteria`

NewMailingActionCodesCriteriaWithDefaults instantiates a new MailingActionCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMailingActionCodes

`func (o *MailingActionCodesCriteria) GetMailingActionCodes() []MailingActionCodeType`

GetMailingActionCodes returns the MailingActionCodes field if non-nil, zero value otherwise.

### GetMailingActionCodesOk

`func (o *MailingActionCodesCriteria) GetMailingActionCodesOk() (*[]MailingActionCodeType, bool)`

GetMailingActionCodesOk returns a tuple with the MailingActionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingActionCodes

`func (o *MailingActionCodesCriteria) SetMailingActionCodes(v []MailingActionCodeType)`

SetMailingActionCodes sets MailingActionCodes field to given value.

### HasMailingActionCodes

`func (o *MailingActionCodesCriteria) HasMailingActionCodes() bool`

HasMailingActionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *MailingActionCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MailingActionCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MailingActionCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MailingActionCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MailingActionCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MailingActionCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MailingActionCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MailingActionCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


