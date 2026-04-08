# FolioReportToEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioInfo** | Pointer to [**FolioReportCriteriaType**](FolioReportCriteriaType.md) |  | [optional] 
**EmailRecipients** | Pointer to [**[]EmailRecipientType**](EmailRecipientType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioReportToEmail

`func NewFolioReportToEmail() *FolioReportToEmail`

NewFolioReportToEmail instantiates a new FolioReportToEmail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioReportToEmailWithDefaults

`func NewFolioReportToEmailWithDefaults() *FolioReportToEmail`

NewFolioReportToEmailWithDefaults instantiates a new FolioReportToEmail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioInfo

`func (o *FolioReportToEmail) GetFolioInfo() FolioReportCriteriaType`

GetFolioInfo returns the FolioInfo field if non-nil, zero value otherwise.

### GetFolioInfoOk

`func (o *FolioReportToEmail) GetFolioInfoOk() (*FolioReportCriteriaType, bool)`

GetFolioInfoOk returns a tuple with the FolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioInfo

`func (o *FolioReportToEmail) SetFolioInfo(v FolioReportCriteriaType)`

SetFolioInfo sets FolioInfo field to given value.

### HasFolioInfo

`func (o *FolioReportToEmail) HasFolioInfo() bool`

HasFolioInfo returns a boolean if a field has been set.

### GetEmailRecipients

`func (o *FolioReportToEmail) GetEmailRecipients() []EmailRecipientType`

GetEmailRecipients returns the EmailRecipients field if non-nil, zero value otherwise.

### GetEmailRecipientsOk

`func (o *FolioReportToEmail) GetEmailRecipientsOk() (*[]EmailRecipientType, bool)`

GetEmailRecipientsOk returns a tuple with the EmailRecipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipients

`func (o *FolioReportToEmail) SetEmailRecipients(v []EmailRecipientType)`

SetEmailRecipients sets EmailRecipients field to given value.

### HasEmailRecipients

`func (o *FolioReportToEmail) HasEmailRecipients() bool`

HasEmailRecipients returns a boolean if a field has been set.

### GetLinks

`func (o *FolioReportToEmail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioReportToEmail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioReportToEmail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioReportToEmail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioReportToEmail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioReportToEmail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioReportToEmail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioReportToEmail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


