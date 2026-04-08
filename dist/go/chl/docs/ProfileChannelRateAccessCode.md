# ProfileChannelRateAccessCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateAccessCode** | **string** | Negotiated Rate Access Code. | 
**StartDate** | Pointer to **string** | Start Date of the Channel Rate Access Code. | [optional] 
**EndDate** | Pointer to **string** | End Date of the Channel Rate Access Code. | [optional] 
**Active** | **bool** |  | 
**AccountId** | **string** | Account Id for which Channel Rate access code is applicable for. | 
**AccountName** | **string** | Account name for which Channel Rate access Code is applicable for. | 
**ProfileAccountType** | Pointer to [**AccountTypeEnum**](AccountTypeEnum.md) |  | [optional] 
**ProfileId** | Pointer to **string** | Profile Id for which Channel Rate access code is applicable for. | [optional] 
**OldRateAccessCode** | Pointer to **string** | Negotiated Rate Access Code. | [optional] 
**OldStartDate** | Pointer to **string** | Start Date of the Channel Rate Access Code. | [optional] 
**OldEndDate** | Pointer to **string** | End Date of the Channel Rate Access Code. | [optional] 

## Methods

### NewProfileChannelRateAccessCode

`func NewProfileChannelRateAccessCode(rateAccessCode string, active bool, accountId string, accountName string, ) *ProfileChannelRateAccessCode`

NewProfileChannelRateAccessCode instantiates a new ProfileChannelRateAccessCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileChannelRateAccessCodeWithDefaults

`func NewProfileChannelRateAccessCodeWithDefaults() *ProfileChannelRateAccessCode`

NewProfileChannelRateAccessCodeWithDefaults instantiates a new ProfileChannelRateAccessCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateAccessCode

`func (o *ProfileChannelRateAccessCode) GetRateAccessCode() string`

GetRateAccessCode returns the RateAccessCode field if non-nil, zero value otherwise.

### GetRateAccessCodeOk

`func (o *ProfileChannelRateAccessCode) GetRateAccessCodeOk() (*string, bool)`

GetRateAccessCodeOk returns a tuple with the RateAccessCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessCode

`func (o *ProfileChannelRateAccessCode) SetRateAccessCode(v string)`

SetRateAccessCode sets RateAccessCode field to given value.


### GetStartDate

`func (o *ProfileChannelRateAccessCode) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ProfileChannelRateAccessCode) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ProfileChannelRateAccessCode) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ProfileChannelRateAccessCode) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ProfileChannelRateAccessCode) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ProfileChannelRateAccessCode) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ProfileChannelRateAccessCode) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ProfileChannelRateAccessCode) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetActive

`func (o *ProfileChannelRateAccessCode) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ProfileChannelRateAccessCode) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ProfileChannelRateAccessCode) SetActive(v bool)`

SetActive sets Active field to given value.


### GetAccountId

`func (o *ProfileChannelRateAccessCode) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ProfileChannelRateAccessCode) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ProfileChannelRateAccessCode) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.


### GetAccountName

`func (o *ProfileChannelRateAccessCode) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ProfileChannelRateAccessCode) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ProfileChannelRateAccessCode) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetProfileAccountType

`func (o *ProfileChannelRateAccessCode) GetProfileAccountType() AccountTypeEnum`

GetProfileAccountType returns the ProfileAccountType field if non-nil, zero value otherwise.

### GetProfileAccountTypeOk

`func (o *ProfileChannelRateAccessCode) GetProfileAccountTypeOk() (*AccountTypeEnum, bool)`

GetProfileAccountTypeOk returns a tuple with the ProfileAccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAccountType

`func (o *ProfileChannelRateAccessCode) SetProfileAccountType(v AccountTypeEnum)`

SetProfileAccountType sets ProfileAccountType field to given value.

### HasProfileAccountType

`func (o *ProfileChannelRateAccessCode) HasProfileAccountType() bool`

HasProfileAccountType returns a boolean if a field has been set.

### GetProfileId

`func (o *ProfileChannelRateAccessCode) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProfileChannelRateAccessCode) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProfileChannelRateAccessCode) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProfileChannelRateAccessCode) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetOldRateAccessCode

`func (o *ProfileChannelRateAccessCode) GetOldRateAccessCode() string`

GetOldRateAccessCode returns the OldRateAccessCode field if non-nil, zero value otherwise.

### GetOldRateAccessCodeOk

`func (o *ProfileChannelRateAccessCode) GetOldRateAccessCodeOk() (*string, bool)`

GetOldRateAccessCodeOk returns a tuple with the OldRateAccessCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRateAccessCode

`func (o *ProfileChannelRateAccessCode) SetOldRateAccessCode(v string)`

SetOldRateAccessCode sets OldRateAccessCode field to given value.

### HasOldRateAccessCode

`func (o *ProfileChannelRateAccessCode) HasOldRateAccessCode() bool`

HasOldRateAccessCode returns a boolean if a field has been set.

### GetOldStartDate

`func (o *ProfileChannelRateAccessCode) GetOldStartDate() string`

GetOldStartDate returns the OldStartDate field if non-nil, zero value otherwise.

### GetOldStartDateOk

`func (o *ProfileChannelRateAccessCode) GetOldStartDateOk() (*string, bool)`

GetOldStartDateOk returns a tuple with the OldStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldStartDate

`func (o *ProfileChannelRateAccessCode) SetOldStartDate(v string)`

SetOldStartDate sets OldStartDate field to given value.

### HasOldStartDate

`func (o *ProfileChannelRateAccessCode) HasOldStartDate() bool`

HasOldStartDate returns a boolean if a field has been set.

### GetOldEndDate

`func (o *ProfileChannelRateAccessCode) GetOldEndDate() string`

GetOldEndDate returns the OldEndDate field if non-nil, zero value otherwise.

### GetOldEndDateOk

`func (o *ProfileChannelRateAccessCode) GetOldEndDateOk() (*string, bool)`

GetOldEndDateOk returns a tuple with the OldEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldEndDate

`func (o *ProfileChannelRateAccessCode) SetOldEndDate(v string)`

SetOldEndDate sets OldEndDate field to given value.

### HasOldEndDate

`func (o *ProfileChannelRateAccessCode) HasOldEndDate() bool`

HasOldEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


