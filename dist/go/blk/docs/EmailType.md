# EmailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | Pointer to **string** | Defines the e-mail address. | [optional] 
**Type** | Pointer to **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | [optional] 
**TypeDescription** | Pointer to **string** | Describes the Type code | [optional] 
**EmailFormat** | Pointer to **string** | Supported Email format. | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewEmailType

`func NewEmailType() *EmailType`

NewEmailType instantiates a new EmailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailTypeWithDefaults

`func NewEmailTypeWithDefaults() *EmailType`

NewEmailTypeWithDefaults instantiates a new EmailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *EmailType) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *EmailType) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *EmailType) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *EmailType) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetType

`func (o *EmailType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EmailType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EmailType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EmailType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *EmailType) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *EmailType) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *EmailType) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *EmailType) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.

### GetEmailFormat

`func (o *EmailType) GetEmailFormat() string`

GetEmailFormat returns the EmailFormat field if non-nil, zero value otherwise.

### GetEmailFormatOk

`func (o *EmailType) GetEmailFormatOk() (*string, bool)`

GetEmailFormatOk returns a tuple with the EmailFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFormat

`func (o *EmailType) SetEmailFormat(v string)`

SetEmailFormat sets EmailFormat field to given value.

### HasEmailFormat

`func (o *EmailType) HasEmailFormat() bool`

HasEmailFormat returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *EmailType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *EmailType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *EmailType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *EmailType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

### GetOrderSequence

`func (o *EmailType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *EmailType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *EmailType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *EmailType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *EmailType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *EmailType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *EmailType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *EmailType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *EmailType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *EmailType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *EmailType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *EmailType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *EmailType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *EmailType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *EmailType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *EmailType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *EmailType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *EmailType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *EmailType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *EmailType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


