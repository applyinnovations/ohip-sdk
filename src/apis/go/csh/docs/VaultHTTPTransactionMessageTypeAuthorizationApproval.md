# VaultHTTPTransactionMessageTypeAuthorizationApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ApprovalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AuthorizedPaymentRecord** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ApprovalCode** | Pointer to **string** | The approval code authenticates the authorization. | [optional] 
**OriginalAuthSequence** | Pointer to **int32** | Unique Authorization Sequence for the authorization and settlement. | [optional] 
**CardSwiped** | Pointer to **bool** |  | [optional] 
**SourceOfAuthorization** | Pointer to [**CardAuthorizationTransactionType**](CardAuthorizationTransactionType.md) |  | [optional] 

## Methods

### NewVaultHTTPTransactionMessageTypeAuthorizationApproval

`func NewVaultHTTPTransactionMessageTypeAuthorizationApproval() *VaultHTTPTransactionMessageTypeAuthorizationApproval`

NewVaultHTTPTransactionMessageTypeAuthorizationApproval instantiates a new VaultHTTPTransactionMessageTypeAuthorizationApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVaultHTTPTransactionMessageTypeAuthorizationApprovalWithDefaults

`func NewVaultHTTPTransactionMessageTypeAuthorizationApprovalWithDefaults() *VaultHTTPTransactionMessageTypeAuthorizationApproval`

NewVaultHTTPTransactionMessageTypeAuthorizationApprovalWithDefaults instantiates a new VaultHTTPTransactionMessageTypeAuthorizationApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetApprovalAmount

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetApprovalAmount() CurrencyAmountType`

GetApprovalAmount returns the ApprovalAmount field if non-nil, zero value otherwise.

### GetApprovalAmountOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetApprovalAmountOk() (*CurrencyAmountType, bool)`

GetApprovalAmountOk returns a tuple with the ApprovalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalAmount

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetApprovalAmount(v CurrencyAmountType)`

SetApprovalAmount sets ApprovalAmount field to given value.

### HasApprovalAmount

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasApprovalAmount() bool`

HasApprovalAmount returns a boolean if a field has been set.

### GetAuthorizedPaymentRecord

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetAuthorizedPaymentRecord() ReservationPaymentMethodType`

GetAuthorizedPaymentRecord returns the AuthorizedPaymentRecord field if non-nil, zero value otherwise.

### GetAuthorizedPaymentRecordOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetAuthorizedPaymentRecordOk() (*ReservationPaymentMethodType, bool)`

GetAuthorizedPaymentRecordOk returns a tuple with the AuthorizedPaymentRecord field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizedPaymentRecord

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetAuthorizedPaymentRecord(v ReservationPaymentMethodType)`

SetAuthorizedPaymentRecord sets AuthorizedPaymentRecord field to given value.

### HasAuthorizedPaymentRecord

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasAuthorizedPaymentRecord() bool`

HasAuthorizedPaymentRecord returns a boolean if a field has been set.

### GetApprovalCode

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetOriginalAuthSequence

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetOriginalAuthSequence() int32`

GetOriginalAuthSequence returns the OriginalAuthSequence field if non-nil, zero value otherwise.

### GetOriginalAuthSequenceOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetOriginalAuthSequenceOk() (*int32, bool)`

GetOriginalAuthSequenceOk returns a tuple with the OriginalAuthSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAuthSequence

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetOriginalAuthSequence(v int32)`

SetOriginalAuthSequence sets OriginalAuthSequence field to given value.

### HasOriginalAuthSequence

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasOriginalAuthSequence() bool`

HasOriginalAuthSequence returns a boolean if a field has been set.

### GetCardSwiped

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetCardSwiped() bool`

GetCardSwiped returns the CardSwiped field if non-nil, zero value otherwise.

### GetCardSwipedOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetCardSwipedOk() (*bool, bool)`

GetCardSwipedOk returns a tuple with the CardSwiped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardSwiped

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetCardSwiped(v bool)`

SetCardSwiped sets CardSwiped field to given value.

### HasCardSwiped

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasCardSwiped() bool`

HasCardSwiped returns a boolean if a field has been set.

### GetSourceOfAuthorization

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetSourceOfAuthorization() CardAuthorizationTransactionType`

GetSourceOfAuthorization returns the SourceOfAuthorization field if non-nil, zero value otherwise.

### GetSourceOfAuthorizationOk

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) GetSourceOfAuthorizationOk() (*CardAuthorizationTransactionType, bool)`

GetSourceOfAuthorizationOk returns a tuple with the SourceOfAuthorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfAuthorization

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) SetSourceOfAuthorization(v CardAuthorizationTransactionType)`

SetSourceOfAuthorization sets SourceOfAuthorization field to given value.

### HasSourceOfAuthorization

`func (o *VaultHTTPTransactionMessageTypeAuthorizationApproval) HasSourceOfAuthorization() bool`

HasSourceOfAuthorization returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


