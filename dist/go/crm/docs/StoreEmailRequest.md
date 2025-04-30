# StoreEmailRequest

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

### NewStoreEmailRequest

`func NewStoreEmailRequest() *StoreEmailRequest`

NewStoreEmailRequest instantiates a new StoreEmailRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStoreEmailRequestWithDefaults

`func NewStoreEmailRequestWithDefaults() *StoreEmailRequest`

NewStoreEmailRequestWithDefaults instantiates a new StoreEmailRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *StoreEmailRequest) GetBlockId() string`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *StoreEmailRequest) GetBlockIdOk() (*string, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *StoreEmailRequest) SetBlockId(v string)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *StoreEmailRequest) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetFromAddress

`func (o *StoreEmailRequest) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *StoreEmailRequest) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *StoreEmailRequest) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.

### HasFromAddress

`func (o *StoreEmailRequest) HasFromAddress() bool`

HasFromAddress returns a boolean if a field has been set.

### GetToAddress

`func (o *StoreEmailRequest) GetToAddress() []string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *StoreEmailRequest) GetToAddressOk() (*[]string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *StoreEmailRequest) SetToAddress(v []string)`

SetToAddress sets ToAddress field to given value.

### HasToAddress

`func (o *StoreEmailRequest) HasToAddress() bool`

HasToAddress returns a boolean if a field has been set.

### GetSubject

`func (o *StoreEmailRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *StoreEmailRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *StoreEmailRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *StoreEmailRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetEmailBody

`func (o *StoreEmailRequest) GetEmailBody() string`

GetEmailBody returns the EmailBody field if non-nil, zero value otherwise.

### GetEmailBodyOk

`func (o *StoreEmailRequest) GetEmailBodyOk() (*string, bool)`

GetEmailBodyOk returns a tuple with the EmailBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailBody

`func (o *StoreEmailRequest) SetEmailBody(v string)`

SetEmailBody sets EmailBody field to given value.

### HasEmailBody

`func (o *StoreEmailRequest) HasEmailBody() bool`

HasEmailBody returns a boolean if a field has been set.

### GetMessageId

`func (o *StoreEmailRequest) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *StoreEmailRequest) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *StoreEmailRequest) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *StoreEmailRequest) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetEmailReceiveDate

`func (o *StoreEmailRequest) GetEmailReceiveDate() string`

GetEmailReceiveDate returns the EmailReceiveDate field if non-nil, zero value otherwise.

### GetEmailReceiveDateOk

`func (o *StoreEmailRequest) GetEmailReceiveDateOk() (*string, bool)`

GetEmailReceiveDateOk returns a tuple with the EmailReceiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailReceiveDate

`func (o *StoreEmailRequest) SetEmailReceiveDate(v string)`

SetEmailReceiveDate sets EmailReceiveDate field to given value.

### HasEmailReceiveDate

`func (o *StoreEmailRequest) HasEmailReceiveDate() bool`

HasEmailReceiveDate returns a boolean if a field has been set.

### GetHasAttachment

`func (o *StoreEmailRequest) GetHasAttachment() bool`

GetHasAttachment returns the HasAttachment field if non-nil, zero value otherwise.

### GetHasAttachmentOk

`func (o *StoreEmailRequest) GetHasAttachmentOk() (*bool, bool)`

GetHasAttachmentOk returns a tuple with the HasAttachment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasAttachment

`func (o *StoreEmailRequest) SetHasAttachment(v bool)`

SetHasAttachment sets HasAttachment field to given value.

### HasHasAttachment

`func (o *StoreEmailRequest) HasHasAttachment() bool`

HasHasAttachment returns a boolean if a field has been set.

### GetWarnings

`func (o *StoreEmailRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StoreEmailRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StoreEmailRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StoreEmailRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


