# EmailMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to **string** | Used for Character Strings, length 0 to 80. | [optional] 
**FromAddress** | Pointer to **string** | Email address | [optional] 
**ToAddress** | Pointer to **[]string** |  | [optional] 
**Subject** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**EmailBody** | Pointer to **string** | Email in base64 binary format. | [optional] 
**MessageId** | Pointer to **string** | Used for Character Strings, length 0 to 100. | [optional] 
**EmailReceiveDate** | Pointer to **string** | The date the email was received. | [optional] 
**HasAttachment** | Pointer to **bool** | Indicates whether the email was sent with an attachment (true) or not (false). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewEmailMessageType

`func NewEmailMessageType() *EmailMessageType`

NewEmailMessageType instantiates a new EmailMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailMessageTypeWithDefaults

`func NewEmailMessageTypeWithDefaults() *EmailMessageType`

NewEmailMessageTypeWithDefaults instantiates a new EmailMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *EmailMessageType) GetBlockId() string`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *EmailMessageType) GetBlockIdOk() (*string, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *EmailMessageType) SetBlockId(v string)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *EmailMessageType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetFromAddress

`func (o *EmailMessageType) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *EmailMessageType) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *EmailMessageType) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.

### HasFromAddress

`func (o *EmailMessageType) HasFromAddress() bool`

HasFromAddress returns a boolean if a field has been set.

### GetToAddress

`func (o *EmailMessageType) GetToAddress() []string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *EmailMessageType) GetToAddressOk() (*[]string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *EmailMessageType) SetToAddress(v []string)`

SetToAddress sets ToAddress field to given value.

### HasToAddress

`func (o *EmailMessageType) HasToAddress() bool`

HasToAddress returns a boolean if a field has been set.

### GetSubject

`func (o *EmailMessageType) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *EmailMessageType) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *EmailMessageType) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *EmailMessageType) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetEmailBody

`func (o *EmailMessageType) GetEmailBody() string`

GetEmailBody returns the EmailBody field if non-nil, zero value otherwise.

### GetEmailBodyOk

`func (o *EmailMessageType) GetEmailBodyOk() (*string, bool)`

GetEmailBodyOk returns a tuple with the EmailBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailBody

`func (o *EmailMessageType) SetEmailBody(v string)`

SetEmailBody sets EmailBody field to given value.

### HasEmailBody

`func (o *EmailMessageType) HasEmailBody() bool`

HasEmailBody returns a boolean if a field has been set.

### GetMessageId

`func (o *EmailMessageType) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *EmailMessageType) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *EmailMessageType) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *EmailMessageType) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetEmailReceiveDate

`func (o *EmailMessageType) GetEmailReceiveDate() string`

GetEmailReceiveDate returns the EmailReceiveDate field if non-nil, zero value otherwise.

### GetEmailReceiveDateOk

`func (o *EmailMessageType) GetEmailReceiveDateOk() (*string, bool)`

GetEmailReceiveDateOk returns a tuple with the EmailReceiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailReceiveDate

`func (o *EmailMessageType) SetEmailReceiveDate(v string)`

SetEmailReceiveDate sets EmailReceiveDate field to given value.

### HasEmailReceiveDate

`func (o *EmailMessageType) HasEmailReceiveDate() bool`

HasEmailReceiveDate returns a boolean if a field has been set.

### GetHasAttachment

`func (o *EmailMessageType) GetHasAttachment() bool`

GetHasAttachment returns the HasAttachment field if non-nil, zero value otherwise.

### GetHasAttachmentOk

`func (o *EmailMessageType) GetHasAttachmentOk() (*bool, bool)`

GetHasAttachmentOk returns a tuple with the HasAttachment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAttachment

`func (o *EmailMessageType) SetHasAttachment(v bool)`

SetHasAttachment sets HasAttachment field to given value.

### HasHasAttachment

`func (o *EmailMessageType) HasHasAttachment() bool`

HasHasAttachment returns a boolean if a field has been set.

### GetWarnings

`func (o *EmailMessageType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EmailMessageType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EmailMessageType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EmailMessageType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


