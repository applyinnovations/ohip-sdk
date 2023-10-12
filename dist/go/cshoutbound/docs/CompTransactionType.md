# CompTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Debit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Credit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Name** | Pointer to **string** | Family name, last name or Company Name. | [optional] 
**FirstName** | Pointer to **string** | Given name, first name or names. | [optional] 
**MembershipId** | Pointer to **string** | Membership number. | [optional] 
**MembershipType** | Pointer to **string** | Membership number. | [optional] 
**ApprovalDate** | Pointer to **string** | Approval date of the posting. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the posting. | [optional] 
**ApprovalCode** | Pointer to **string** | Approval code of the posting. | [optional] 
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number associated with the transaction. | [optional] 
**RoomId** | Pointer to **string** | Room number associated with the transaction. | [optional] 
**CompId** | Pointer to **string** | Comp number associated with the transaction. | [optional] 
**FolioNo** | Pointer to **float32** | Window number where the transaction is posted. | [optional] 
**SubGroup** | Pointer to **string** | Subgroup for the transaction. | [optional] 
**TransactionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionId** | Pointer to **float32** | Transaction Number for which request is being submitted. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code. | [optional] 
**TransactionDescription** | Pointer to **string** | Transaction description. | [optional] 
**TransactionStatus** | Pointer to **string** | Transaction status. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction date of the posting. | [optional] 
**UserName** | Pointer to **string** | User name. | [optional] 
**ExternalUserId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewCompTransactionType

`func NewCompTransactionType() *CompTransactionType`

NewCompTransactionType instantiates a new CompTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTransactionTypeWithDefaults

`func NewCompTransactionTypeWithDefaults() *CompTransactionType`

NewCompTransactionTypeWithDefaults instantiates a new CompTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CompTransactionType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CompTransactionType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CompTransactionType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CompTransactionType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPostedAmount

`func (o *CompTransactionType) GetPostedAmount() CurrencyAmountType`

GetPostedAmount returns the PostedAmount field if non-nil, zero value otherwise.

### GetPostedAmountOk

`func (o *CompTransactionType) GetPostedAmountOk() (*CurrencyAmountType, bool)`

GetPostedAmountOk returns a tuple with the PostedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAmount

`func (o *CompTransactionType) SetPostedAmount(v CurrencyAmountType)`

SetPostedAmount sets PostedAmount field to given value.

### HasPostedAmount

`func (o *CompTransactionType) HasPostedAmount() bool`

HasPostedAmount returns a boolean if a field has been set.

### GetDebit

`func (o *CompTransactionType) GetDebit() CurrencyAmountType`

GetDebit returns the Debit field if non-nil, zero value otherwise.

### GetDebitOk

`func (o *CompTransactionType) GetDebitOk() (*CurrencyAmountType, bool)`

GetDebitOk returns a tuple with the Debit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebit

`func (o *CompTransactionType) SetDebit(v CurrencyAmountType)`

SetDebit sets Debit field to given value.

### HasDebit

`func (o *CompTransactionType) HasDebit() bool`

HasDebit returns a boolean if a field has been set.

### GetCredit

`func (o *CompTransactionType) GetCredit() CurrencyAmountType`

GetCredit returns the Credit field if non-nil, zero value otherwise.

### GetCreditOk

`func (o *CompTransactionType) GetCreditOk() (*CurrencyAmountType, bool)`

GetCreditOk returns a tuple with the Credit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredit

`func (o *CompTransactionType) SetCredit(v CurrencyAmountType)`

SetCredit sets Credit field to given value.

### HasCredit

`func (o *CompTransactionType) HasCredit() bool`

HasCredit returns a boolean if a field has been set.

### GetName

`func (o *CompTransactionType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CompTransactionType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CompTransactionType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CompTransactionType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFirstName

`func (o *CompTransactionType) GetFirstName() string`

GetFirstName returns the FirstName field if non-nil, zero value otherwise.

### GetFirstNameOk

`func (o *CompTransactionType) GetFirstNameOk() (*string, bool)`

GetFirstNameOk returns a tuple with the FirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstName

`func (o *CompTransactionType) SetFirstName(v string)`

SetFirstName sets FirstName field to given value.

### HasFirstName

`func (o *CompTransactionType) HasFirstName() bool`

HasFirstName returns a boolean if a field has been set.

### GetMembershipId

`func (o *CompTransactionType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *CompTransactionType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *CompTransactionType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *CompTransactionType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipType

`func (o *CompTransactionType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *CompTransactionType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *CompTransactionType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *CompTransactionType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetApprovalDate

`func (o *CompTransactionType) GetApprovalDate() string`

GetApprovalDate returns the ApprovalDate field if non-nil, zero value otherwise.

### GetApprovalDateOk

`func (o *CompTransactionType) GetApprovalDateOk() (*string, bool)`

GetApprovalDateOk returns a tuple with the ApprovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDate

`func (o *CompTransactionType) SetApprovalDate(v string)`

SetApprovalDate sets ApprovalDate field to given value.

### HasApprovalDate

`func (o *CompTransactionType) HasApprovalDate() bool`

HasApprovalDate returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *CompTransactionType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *CompTransactionType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *CompTransactionType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *CompTransactionType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalCode

`func (o *CompTransactionType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *CompTransactionType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *CompTransactionType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *CompTransactionType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetAuthorizerId

`func (o *CompTransactionType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *CompTransactionType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *CompTransactionType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *CompTransactionType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetGuestNameId

`func (o *CompTransactionType) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *CompTransactionType) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *CompTransactionType) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *CompTransactionType) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetResvNameId

`func (o *CompTransactionType) GetResvNameId() UniqueIDType`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *CompTransactionType) GetResvNameIdOk() (*UniqueIDType, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *CompTransactionType) SetResvNameId(v UniqueIDType)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *CompTransactionType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *CompTransactionType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *CompTransactionType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *CompTransactionType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *CompTransactionType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetRoomId

`func (o *CompTransactionType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CompTransactionType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CompTransactionType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CompTransactionType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetCompId

`func (o *CompTransactionType) GetCompId() string`

GetCompId returns the CompId field if non-nil, zero value otherwise.

### GetCompIdOk

`func (o *CompTransactionType) GetCompIdOk() (*string, bool)`

GetCompIdOk returns a tuple with the CompId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompId

`func (o *CompTransactionType) SetCompId(v string)`

SetCompId sets CompId field to given value.

### HasCompId

`func (o *CompTransactionType) HasCompId() bool`

HasCompId returns a boolean if a field has been set.

### GetFolioNo

`func (o *CompTransactionType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *CompTransactionType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *CompTransactionType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *CompTransactionType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetSubGroup

`func (o *CompTransactionType) GetSubGroup() string`

GetSubGroup returns the SubGroup field if non-nil, zero value otherwise.

### GetSubGroupOk

`func (o *CompTransactionType) GetSubGroupOk() (*string, bool)`

GetSubGroupOk returns a tuple with the SubGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubGroup

`func (o *CompTransactionType) SetSubGroup(v string)`

SetSubGroup sets SubGroup field to given value.

### HasSubGroup

`func (o *CompTransactionType) HasSubGroup() bool`

HasSubGroup returns a boolean if a field has been set.

### GetTransactionAmount

`func (o *CompTransactionType) GetTransactionAmount() CurrencyAmountType`

GetTransactionAmount returns the TransactionAmount field if non-nil, zero value otherwise.

### GetTransactionAmountOk

`func (o *CompTransactionType) GetTransactionAmountOk() (*CurrencyAmountType, bool)`

GetTransactionAmountOk returns a tuple with the TransactionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAmount

`func (o *CompTransactionType) SetTransactionAmount(v CurrencyAmountType)`

SetTransactionAmount sets TransactionAmount field to given value.

### HasTransactionAmount

`func (o *CompTransactionType) HasTransactionAmount() bool`

HasTransactionAmount returns a boolean if a field has been set.

### GetTransactionId

`func (o *CompTransactionType) GetTransactionId() float32`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *CompTransactionType) GetTransactionIdOk() (*float32, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *CompTransactionType) SetTransactionId(v float32)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *CompTransactionType) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CompTransactionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CompTransactionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CompTransactionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CompTransactionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *CompTransactionType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *CompTransactionType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *CompTransactionType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *CompTransactionType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetTransactionStatus

`func (o *CompTransactionType) GetTransactionStatus() string`

GetTransactionStatus returns the TransactionStatus field if non-nil, zero value otherwise.

### GetTransactionStatusOk

`func (o *CompTransactionType) GetTransactionStatusOk() (*string, bool)`

GetTransactionStatusOk returns a tuple with the TransactionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionStatus

`func (o *CompTransactionType) SetTransactionStatus(v string)`

SetTransactionStatus sets TransactionStatus field to given value.

### HasTransactionStatus

`func (o *CompTransactionType) HasTransactionStatus() bool`

HasTransactionStatus returns a boolean if a field has been set.

### GetTransactionDate

`func (o *CompTransactionType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *CompTransactionType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *CompTransactionType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *CompTransactionType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetUserName

`func (o *CompTransactionType) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *CompTransactionType) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *CompTransactionType) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *CompTransactionType) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetExternalUserId

`func (o *CompTransactionType) GetExternalUserId() UniqueIDType`

GetExternalUserId returns the ExternalUserId field if non-nil, zero value otherwise.

### GetExternalUserIdOk

`func (o *CompTransactionType) GetExternalUserIdOk() (*UniqueIDType, bool)`

GetExternalUserIdOk returns a tuple with the ExternalUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalUserId

`func (o *CompTransactionType) SetExternalUserId(v UniqueIDType)`

SetExternalUserId sets ExternalUserId field to given value.

### HasExternalUserId

`func (o *CompTransactionType) HasExternalUserId() bool`

HasExternalUserId returns a boolean if a field has been set.

### GetCashierId

`func (o *CompTransactionType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CompTransactionType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CompTransactionType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CompTransactionType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


