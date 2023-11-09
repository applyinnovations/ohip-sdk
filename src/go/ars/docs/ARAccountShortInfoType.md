# ARAccountShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountName** | Pointer to **string** | Name of the AR Account. | [optional] 
**AccountNo** | Pointer to **string** | The Account Number for the Account. | [optional] 
**Status** | Pointer to [**ARAccountStatusType**](ARAccountStatusType.md) |  | [optional] 

## Methods

### NewARAccountShortInfoType

`func NewARAccountShortInfoType() *ARAccountShortInfoType`

NewARAccountShortInfoType instantiates a new ARAccountShortInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountShortInfoTypeWithDefaults

`func NewARAccountShortInfoTypeWithDefaults() *ARAccountShortInfoType`

NewARAccountShortInfoTypeWithDefaults instantiates a new ARAccountShortInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ARAccountShortInfoType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARAccountShortInfoType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARAccountShortInfoType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARAccountShortInfoType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *ARAccountShortInfoType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ARAccountShortInfoType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ARAccountShortInfoType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ARAccountShortInfoType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAccountNo

`func (o *ARAccountShortInfoType) GetAccountNo() string`

GetAccountNo returns the AccountNo field if non-nil, zero value otherwise.

### GetAccountNoOk

`func (o *ARAccountShortInfoType) GetAccountNoOk() (*string, bool)`

GetAccountNoOk returns a tuple with the AccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNo

`func (o *ARAccountShortInfoType) SetAccountNo(v string)`

SetAccountNo sets AccountNo field to given value.

### HasAccountNo

`func (o *ARAccountShortInfoType) HasAccountNo() bool`

HasAccountNo returns a boolean if a field has been set.

### GetStatus

`func (o *ARAccountShortInfoType) GetStatus() ARAccountStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ARAccountShortInfoType) GetStatusOk() (*ARAccountStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ARAccountShortInfoType) SetStatus(v ARAccountStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ARAccountShortInfoType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


