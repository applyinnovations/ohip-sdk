# WebUserAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoGeneratePassword** | Pointer to **bool** | A flag which determines if the password is auto generated. | [optional] 
**Comments** | Pointer to **string** | Comments. | [optional] 
**DomainCode** | Pointer to **string** | Domain code. | [optional] 
**History** | Pointer to [**WebUserHistoryType**](WebUserHistoryType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Boolean flag that indicates whether the web account is inactive or not. | [optional] 
**Locked** | Pointer to **bool** | Boolean flag that indicates whether the web account is locked or not. | [optional] 
**LoginName** | Pointer to **string** | Login Name of the guest. | [optional] 
**NewLoginName** | Pointer to **string** | New Login Name of the guest. | [optional] 
**NewPassword** | Pointer to **string** | Login Password. | [optional] 
**SecurityAnswer** | Pointer to **string** | Answer to the Security Question. | [optional] 
**SecurityQuestion** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewWebUserAccountType

`func NewWebUserAccountType() *WebUserAccountType`

NewWebUserAccountType instantiates a new WebUserAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebUserAccountTypeWithDefaults

`func NewWebUserAccountTypeWithDefaults() *WebUserAccountType`

NewWebUserAccountTypeWithDefaults instantiates a new WebUserAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoGeneratePassword

`func (o *WebUserAccountType) GetAutoGeneratePassword() bool`

GetAutoGeneratePassword returns the AutoGeneratePassword field if non-nil, zero value otherwise.

### GetAutoGeneratePasswordOk

`func (o *WebUserAccountType) GetAutoGeneratePasswordOk() (*bool, bool)`

GetAutoGeneratePasswordOk returns a tuple with the AutoGeneratePassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoGeneratePassword

`func (o *WebUserAccountType) SetAutoGeneratePassword(v bool)`

SetAutoGeneratePassword sets AutoGeneratePassword field to given value.

### HasAutoGeneratePassword

`func (o *WebUserAccountType) HasAutoGeneratePassword() bool`

HasAutoGeneratePassword returns a boolean if a field has been set.

### GetComments

`func (o *WebUserAccountType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *WebUserAccountType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *WebUserAccountType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *WebUserAccountType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetDomainCode

`func (o *WebUserAccountType) GetDomainCode() string`

GetDomainCode returns the DomainCode field if non-nil, zero value otherwise.

### GetDomainCodeOk

`func (o *WebUserAccountType) GetDomainCodeOk() (*string, bool)`

GetDomainCodeOk returns a tuple with the DomainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainCode

`func (o *WebUserAccountType) SetDomainCode(v string)`

SetDomainCode sets DomainCode field to given value.

### HasDomainCode

`func (o *WebUserAccountType) HasDomainCode() bool`

HasDomainCode returns a boolean if a field has been set.

### GetHistory

`func (o *WebUserAccountType) GetHistory() WebUserHistoryType`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *WebUserAccountType) GetHistoryOk() (*WebUserHistoryType, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *WebUserAccountType) SetHistory(v WebUserHistoryType)`

SetHistory sets History field to given value.

### HasHistory

`func (o *WebUserAccountType) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetInactive

`func (o *WebUserAccountType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *WebUserAccountType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *WebUserAccountType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *WebUserAccountType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLocked

`func (o *WebUserAccountType) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *WebUserAccountType) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *WebUserAccountType) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *WebUserAccountType) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetLoginName

`func (o *WebUserAccountType) GetLoginName() string`

GetLoginName returns the LoginName field if non-nil, zero value otherwise.

### GetLoginNameOk

`func (o *WebUserAccountType) GetLoginNameOk() (*string, bool)`

GetLoginNameOk returns a tuple with the LoginName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoginName

`func (o *WebUserAccountType) SetLoginName(v string)`

SetLoginName sets LoginName field to given value.

### HasLoginName

`func (o *WebUserAccountType) HasLoginName() bool`

HasLoginName returns a boolean if a field has been set.

### GetNewLoginName

`func (o *WebUserAccountType) GetNewLoginName() string`

GetNewLoginName returns the NewLoginName field if non-nil, zero value otherwise.

### GetNewLoginNameOk

`func (o *WebUserAccountType) GetNewLoginNameOk() (*string, bool)`

GetNewLoginNameOk returns a tuple with the NewLoginName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewLoginName

`func (o *WebUserAccountType) SetNewLoginName(v string)`

SetNewLoginName sets NewLoginName field to given value.

### HasNewLoginName

`func (o *WebUserAccountType) HasNewLoginName() bool`

HasNewLoginName returns a boolean if a field has been set.

### GetNewPassword

`func (o *WebUserAccountType) GetNewPassword() string`

GetNewPassword returns the NewPassword field if non-nil, zero value otherwise.

### GetNewPasswordOk

`func (o *WebUserAccountType) GetNewPasswordOk() (*string, bool)`

GetNewPasswordOk returns a tuple with the NewPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPassword

`func (o *WebUserAccountType) SetNewPassword(v string)`

SetNewPassword sets NewPassword field to given value.

### HasNewPassword

`func (o *WebUserAccountType) HasNewPassword() bool`

HasNewPassword returns a boolean if a field has been set.

### GetSecurityAnswer

`func (o *WebUserAccountType) GetSecurityAnswer() string`

GetSecurityAnswer returns the SecurityAnswer field if non-nil, zero value otherwise.

### GetSecurityAnswerOk

`func (o *WebUserAccountType) GetSecurityAnswerOk() (*string, bool)`

GetSecurityAnswerOk returns a tuple with the SecurityAnswer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityAnswer

`func (o *WebUserAccountType) SetSecurityAnswer(v string)`

SetSecurityAnswer sets SecurityAnswer field to given value.

### HasSecurityAnswer

`func (o *WebUserAccountType) HasSecurityAnswer() bool`

HasSecurityAnswer returns a boolean if a field has been set.

### GetSecurityQuestion

`func (o *WebUserAccountType) GetSecurityQuestion() CodeDescriptionType`

GetSecurityQuestion returns the SecurityQuestion field if non-nil, zero value otherwise.

### GetSecurityQuestionOk

`func (o *WebUserAccountType) GetSecurityQuestionOk() (*CodeDescriptionType, bool)`

GetSecurityQuestionOk returns a tuple with the SecurityQuestion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecurityQuestion

`func (o *WebUserAccountType) SetSecurityQuestion(v CodeDescriptionType)`

SetSecurityQuestion sets SecurityQuestion field to given value.

### HasSecurityQuestion

`func (o *WebUserAccountType) HasSecurityQuestion() bool`

HasSecurityQuestion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


