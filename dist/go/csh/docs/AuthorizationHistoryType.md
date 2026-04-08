# AuthorizationHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessDate** | Pointer to **string** | The corresponding business date for this record. | [optional] 
**TransactionType** | Pointer to [**CardAuthorizationTransactionType**](CardAuthorizationTransactionType.md) |  | [optional] 
**ApprovalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CardPaymentInformation** | Pointer to [**AuthorizationHistoryTypeCardPaymentInformation**](AuthorizationHistoryTypeCardPaymentInformation.md) |  | [optional] 
**Status** | Pointer to [**AuthorizationHistoryTypeStatus**](AuthorizationHistoryTypeStatus.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Type** | Pointer to **string** | History type can only be either Settlement or Authorization or Payment or Refunds. | [optional] 

## Methods

### NewAuthorizationHistoryType

`func NewAuthorizationHistoryType() *AuthorizationHistoryType`

NewAuthorizationHistoryType instantiates a new AuthorizationHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationHistoryTypeWithDefaults

`func NewAuthorizationHistoryTypeWithDefaults() *AuthorizationHistoryType`

NewAuthorizationHistoryTypeWithDefaults instantiates a new AuthorizationHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessDate

`func (o *AuthorizationHistoryType) GetBusinessDate() string`

GetBusinessDate returns the BusinessDate field if non-nil, zero value otherwise.

### GetBusinessDateOk

`func (o *AuthorizationHistoryType) GetBusinessDateOk() (*string, bool)`

GetBusinessDateOk returns a tuple with the BusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDate

`func (o *AuthorizationHistoryType) SetBusinessDate(v string)`

SetBusinessDate sets BusinessDate field to given value.

### HasBusinessDate

`func (o *AuthorizationHistoryType) HasBusinessDate() bool`

HasBusinessDate returns a boolean if a field has been set.

### GetTransactionType

`func (o *AuthorizationHistoryType) GetTransactionType() CardAuthorizationTransactionType`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *AuthorizationHistoryType) GetTransactionTypeOk() (*CardAuthorizationTransactionType, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *AuthorizationHistoryType) SetTransactionType(v CardAuthorizationTransactionType)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *AuthorizationHistoryType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetApprovalAmount

`func (o *AuthorizationHistoryType) GetApprovalAmount() CurrencyAmountType`

GetApprovalAmount returns the ApprovalAmount field if non-nil, zero value otherwise.

### GetApprovalAmountOk

`func (o *AuthorizationHistoryType) GetApprovalAmountOk() (*CurrencyAmountType, bool)`

GetApprovalAmountOk returns a tuple with the ApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalAmount

`func (o *AuthorizationHistoryType) SetApprovalAmount(v CurrencyAmountType)`

SetApprovalAmount sets ApprovalAmount field to given value.

### HasApprovalAmount

`func (o *AuthorizationHistoryType) HasApprovalAmount() bool`

HasApprovalAmount returns a boolean if a field has been set.

### GetCardPaymentInformation

`func (o *AuthorizationHistoryType) GetCardPaymentInformation() AuthorizationHistoryTypeCardPaymentInformation`

GetCardPaymentInformation returns the CardPaymentInformation field if non-nil, zero value otherwise.

### GetCardPaymentInformationOk

`func (o *AuthorizationHistoryType) GetCardPaymentInformationOk() (*AuthorizationHistoryTypeCardPaymentInformation, bool)`

GetCardPaymentInformationOk returns a tuple with the CardPaymentInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardPaymentInformation

`func (o *AuthorizationHistoryType) SetCardPaymentInformation(v AuthorizationHistoryTypeCardPaymentInformation)`

SetCardPaymentInformation sets CardPaymentInformation field to given value.

### HasCardPaymentInformation

`func (o *AuthorizationHistoryType) HasCardPaymentInformation() bool`

HasCardPaymentInformation returns a boolean if a field has been set.

### GetStatus

`func (o *AuthorizationHistoryType) GetStatus() AuthorizationHistoryTypeStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AuthorizationHistoryType) GetStatusOk() (*AuthorizationHistoryTypeStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AuthorizationHistoryType) SetStatus(v AuthorizationHistoryTypeStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AuthorizationHistoryType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *AuthorizationHistoryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *AuthorizationHistoryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *AuthorizationHistoryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *AuthorizationHistoryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *AuthorizationHistoryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AuthorizationHistoryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AuthorizationHistoryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *AuthorizationHistoryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *AuthorizationHistoryType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *AuthorizationHistoryType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *AuthorizationHistoryType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *AuthorizationHistoryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *AuthorizationHistoryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *AuthorizationHistoryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *AuthorizationHistoryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *AuthorizationHistoryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *AuthorizationHistoryType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *AuthorizationHistoryType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *AuthorizationHistoryType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *AuthorizationHistoryType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetType

`func (o *AuthorizationHistoryType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AuthorizationHistoryType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AuthorizationHistoryType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AuthorizationHistoryType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


