# EmailInfoResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**AccountId**](AccountId.md) |  | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ContactId** | Pointer to [**ContactId**](ContactId.md) |  | [optional] 
**EmailAttachmentId** | Pointer to **int32** | Email Attachment Id for stored external emails. | [optional] 
**EmailID** | Pointer to [**EmailID**](EmailID.md) |  | [optional] 
**EmailReceivedDateTime** | Pointer to **string** | Email Recieved Date Time of the Sender. | [optional] 
**EmailRecipients** | Pointer to **string** | List of Email TO Recipients separated by \&quot;;\&quot; | [optional] 
**EmailSubject** | Pointer to **string** | Subject of the email. | [optional] 
**HasEmailAttachments** | Pointer to **bool** | Indicates if the Email body has attachments included. | [optional] 
**HotelCodes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**SenderEmailAddress** | Pointer to **string** | Email address of the Sender. | [optional] 
**SenderFirstName** | Pointer to **string** | Given name or first name of the Sender. | [optional] 
**SenderLastName** | Pointer to **string** | Family name or last name of the Sender. | [optional] 

## Methods

### NewEmailInfoResponseType

`func NewEmailInfoResponseType() *EmailInfoResponseType`

NewEmailInfoResponseType instantiates a new EmailInfoResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailInfoResponseTypeWithDefaults

`func NewEmailInfoResponseTypeWithDefaults() *EmailInfoResponseType`

NewEmailInfoResponseTypeWithDefaults instantiates a new EmailInfoResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *EmailInfoResponseType) GetAccountId() AccountId`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *EmailInfoResponseType) GetAccountIdOk() (*AccountId, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *EmailInfoResponseType) SetAccountId(v AccountId)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *EmailInfoResponseType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBlockId

`func (o *EmailInfoResponseType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *EmailInfoResponseType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *EmailInfoResponseType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *EmailInfoResponseType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetContactId

`func (o *EmailInfoResponseType) GetContactId() ContactId`

GetContactId returns the ContactId field if non-nil, zero value otherwise.

### GetContactIdOk

`func (o *EmailInfoResponseType) GetContactIdOk() (*ContactId, bool)`

GetContactIdOk returns a tuple with the ContactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactId

`func (o *EmailInfoResponseType) SetContactId(v ContactId)`

SetContactId sets ContactId field to given value.

### HasContactId

`func (o *EmailInfoResponseType) HasContactId() bool`

HasContactId returns a boolean if a field has been set.

### GetEmailAttachmentId

`func (o *EmailInfoResponseType) GetEmailAttachmentId() int32`

GetEmailAttachmentId returns the EmailAttachmentId field if non-nil, zero value otherwise.

### GetEmailAttachmentIdOk

`func (o *EmailInfoResponseType) GetEmailAttachmentIdOk() (*int32, bool)`

GetEmailAttachmentIdOk returns a tuple with the EmailAttachmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAttachmentId

`func (o *EmailInfoResponseType) SetEmailAttachmentId(v int32)`

SetEmailAttachmentId sets EmailAttachmentId field to given value.

### HasEmailAttachmentId

`func (o *EmailInfoResponseType) HasEmailAttachmentId() bool`

HasEmailAttachmentId returns a boolean if a field has been set.

### GetEmailID

`func (o *EmailInfoResponseType) GetEmailID() EmailID`

GetEmailID returns the EmailID field if non-nil, zero value otherwise.

### GetEmailIDOk

`func (o *EmailInfoResponseType) GetEmailIDOk() (*EmailID, bool)`

GetEmailIDOk returns a tuple with the EmailID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailID

`func (o *EmailInfoResponseType) SetEmailID(v EmailID)`

SetEmailID sets EmailID field to given value.

### HasEmailID

`func (o *EmailInfoResponseType) HasEmailID() bool`

HasEmailID returns a boolean if a field has been set.

### GetEmailReceivedDateTime

`func (o *EmailInfoResponseType) GetEmailReceivedDateTime() string`

GetEmailReceivedDateTime returns the EmailReceivedDateTime field if non-nil, zero value otherwise.

### GetEmailReceivedDateTimeOk

`func (o *EmailInfoResponseType) GetEmailReceivedDateTimeOk() (*string, bool)`

GetEmailReceivedDateTimeOk returns a tuple with the EmailReceivedDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailReceivedDateTime

`func (o *EmailInfoResponseType) SetEmailReceivedDateTime(v string)`

SetEmailReceivedDateTime sets EmailReceivedDateTime field to given value.

### HasEmailReceivedDateTime

`func (o *EmailInfoResponseType) HasEmailReceivedDateTime() bool`

HasEmailReceivedDateTime returns a boolean if a field has been set.

### GetEmailRecipients

`func (o *EmailInfoResponseType) GetEmailRecipients() string`

GetEmailRecipients returns the EmailRecipients field if non-nil, zero value otherwise.

### GetEmailRecipientsOk

`func (o *EmailInfoResponseType) GetEmailRecipientsOk() (*string, bool)`

GetEmailRecipientsOk returns a tuple with the EmailRecipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailRecipients

`func (o *EmailInfoResponseType) SetEmailRecipients(v string)`

SetEmailRecipients sets EmailRecipients field to given value.

### HasEmailRecipients

`func (o *EmailInfoResponseType) HasEmailRecipients() bool`

HasEmailRecipients returns a boolean if a field has been set.

### GetEmailSubject

`func (o *EmailInfoResponseType) GetEmailSubject() string`

GetEmailSubject returns the EmailSubject field if non-nil, zero value otherwise.

### GetEmailSubjectOk

`func (o *EmailInfoResponseType) GetEmailSubjectOk() (*string, bool)`

GetEmailSubjectOk returns a tuple with the EmailSubject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailSubject

`func (o *EmailInfoResponseType) SetEmailSubject(v string)`

SetEmailSubject sets EmailSubject field to given value.

### HasEmailSubject

`func (o *EmailInfoResponseType) HasEmailSubject() bool`

HasEmailSubject returns a boolean if a field has been set.

### GetHasEmailAttachments

`func (o *EmailInfoResponseType) GetHasEmailAttachments() bool`

GetHasEmailAttachments returns the HasEmailAttachments field if non-nil, zero value otherwise.

### GetHasEmailAttachmentsOk

`func (o *EmailInfoResponseType) GetHasEmailAttachmentsOk() (*bool, bool)`

GetHasEmailAttachmentsOk returns a tuple with the HasEmailAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasEmailAttachments

`func (o *EmailInfoResponseType) SetHasEmailAttachments(v bool)`

SetHasEmailAttachments sets HasEmailAttachments field to given value.

### HasHasEmailAttachments

`func (o *EmailInfoResponseType) HasHasEmailAttachments() bool`

HasHasEmailAttachments returns a boolean if a field has been set.

### GetHotelCodes

`func (o *EmailInfoResponseType) GetHotelCodes() CodeListType`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *EmailInfoResponseType) GetHotelCodesOk() (*CodeListType, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *EmailInfoResponseType) SetHotelCodes(v CodeListType)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *EmailInfoResponseType) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetSenderEmailAddress

`func (o *EmailInfoResponseType) GetSenderEmailAddress() string`

GetSenderEmailAddress returns the SenderEmailAddress field if non-nil, zero value otherwise.

### GetSenderEmailAddressOk

`func (o *EmailInfoResponseType) GetSenderEmailAddressOk() (*string, bool)`

GetSenderEmailAddressOk returns a tuple with the SenderEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSenderEmailAddress

`func (o *EmailInfoResponseType) SetSenderEmailAddress(v string)`

SetSenderEmailAddress sets SenderEmailAddress field to given value.

### HasSenderEmailAddress

`func (o *EmailInfoResponseType) HasSenderEmailAddress() bool`

HasSenderEmailAddress returns a boolean if a field has been set.

### GetSenderFirstName

`func (o *EmailInfoResponseType) GetSenderFirstName() string`

GetSenderFirstName returns the SenderFirstName field if non-nil, zero value otherwise.

### GetSenderFirstNameOk

`func (o *EmailInfoResponseType) GetSenderFirstNameOk() (*string, bool)`

GetSenderFirstNameOk returns a tuple with the SenderFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSenderFirstName

`func (o *EmailInfoResponseType) SetSenderFirstName(v string)`

SetSenderFirstName sets SenderFirstName field to given value.

### HasSenderFirstName

`func (o *EmailInfoResponseType) HasSenderFirstName() bool`

HasSenderFirstName returns a boolean if a field has been set.

### GetSenderLastName

`func (o *EmailInfoResponseType) GetSenderLastName() string`

GetSenderLastName returns the SenderLastName field if non-nil, zero value otherwise.

### GetSenderLastNameOk

`func (o *EmailInfoResponseType) GetSenderLastNameOk() (*string, bool)`

GetSenderLastNameOk returns a tuple with the SenderLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSenderLastName

`func (o *EmailInfoResponseType) SetSenderLastName(v string)`

SetSenderLastName sets SenderLastName field to given value.

### HasSenderLastName

`func (o *EmailInfoResponseType) HasSenderLastName() bool`

HasSenderLastName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


