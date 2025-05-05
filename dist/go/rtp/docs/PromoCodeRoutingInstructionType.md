# PromoCodeRoutingInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Duration** | Pointer to [**PromoCodeRoutingInstructionTypeDuration**](PromoCodeRoutingInstructionTypeDuration.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**CreditLimit** | Pointer to **float32** | Allowable credit amount for this routing fetchInstructions. Null value means no limit, 0 equals zero. | [optional] 
**PercentageLimit** | Pointer to **float32** | The routing limit percentage allowed for this routing fetchInstructions. | [optional] 
**Covers** | Pointer to **float32** | Number of covers for this routing fetchInstructions. | [optional] 
**LimitUsed** | Pointer to **float32** | Amount of Credit used for this routing fetchInstructions. | [optional] 
**AuthorizerInfo** | Pointer to [**AuthorizerInfoType**](AuthorizerInfoType.md) |  | [optional] 
**MembershipId** | Pointer to **string** | Membership number | [optional] 
**Comments** | Pointer to **string** | User Defined Comments. Used for Comp Routing. | [optional] 
**ActionType** | Pointer to **string** | Created or removed rate code. | [optional] 
**FolioNo** | Pointer to **int32** | The folio number where it is applied. | [optional] 
**PromptForAuthorizer** | Pointer to **bool** | Flag to indicate to prompt the Authorizer. | [optional] 
**AutoPopulateRouting** | Pointer to **bool** | Flag to auto populate the Routing. | [optional] 
**CompPreApprovalRequired** | Pointer to **bool** | Flag to indicate that pre approval is required. | [optional] 

## Methods

### NewPromoCodeRoutingInstructionType

`func NewPromoCodeRoutingInstructionType() *PromoCodeRoutingInstructionType`

NewPromoCodeRoutingInstructionType instantiates a new PromoCodeRoutingInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromoCodeRoutingInstructionTypeWithDefaults

`func NewPromoCodeRoutingInstructionTypeWithDefaults() *PromoCodeRoutingInstructionType`

NewPromoCodeRoutingInstructionTypeWithDefaults instantiates a new PromoCodeRoutingInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDuration

`func (o *PromoCodeRoutingInstructionType) GetDuration() PromoCodeRoutingInstructionTypeDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *PromoCodeRoutingInstructionType) GetDurationOk() (*PromoCodeRoutingInstructionTypeDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *PromoCodeRoutingInstructionType) SetDuration(v PromoCodeRoutingInstructionTypeDuration)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *PromoCodeRoutingInstructionType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *PromoCodeRoutingInstructionType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *PromoCodeRoutingInstructionType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *PromoCodeRoutingInstructionType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *PromoCodeRoutingInstructionType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *PromoCodeRoutingInstructionType) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *PromoCodeRoutingInstructionType) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *PromoCodeRoutingInstructionType) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *PromoCodeRoutingInstructionType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetCreditLimit

`func (o *PromoCodeRoutingInstructionType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *PromoCodeRoutingInstructionType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *PromoCodeRoutingInstructionType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *PromoCodeRoutingInstructionType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetPercentageLimit

`func (o *PromoCodeRoutingInstructionType) GetPercentageLimit() float32`

GetPercentageLimit returns the PercentageLimit field if non-nil, zero value otherwise.

### GetPercentageLimitOk

`func (o *PromoCodeRoutingInstructionType) GetPercentageLimitOk() (*float32, bool)`

GetPercentageLimitOk returns a tuple with the PercentageLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageLimit

`func (o *PromoCodeRoutingInstructionType) SetPercentageLimit(v float32)`

SetPercentageLimit sets PercentageLimit field to given value.

### HasPercentageLimit

`func (o *PromoCodeRoutingInstructionType) HasPercentageLimit() bool`

HasPercentageLimit returns a boolean if a field has been set.

### GetCovers

`func (o *PromoCodeRoutingInstructionType) GetCovers() float32`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *PromoCodeRoutingInstructionType) GetCoversOk() (*float32, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *PromoCodeRoutingInstructionType) SetCovers(v float32)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *PromoCodeRoutingInstructionType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetLimitUsed

`func (o *PromoCodeRoutingInstructionType) GetLimitUsed() float32`

GetLimitUsed returns the LimitUsed field if non-nil, zero value otherwise.

### GetLimitUsedOk

`func (o *PromoCodeRoutingInstructionType) GetLimitUsedOk() (*float32, bool)`

GetLimitUsedOk returns a tuple with the LimitUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitUsed

`func (o *PromoCodeRoutingInstructionType) SetLimitUsed(v float32)`

SetLimitUsed sets LimitUsed field to given value.

### HasLimitUsed

`func (o *PromoCodeRoutingInstructionType) HasLimitUsed() bool`

HasLimitUsed returns a boolean if a field has been set.

### GetAuthorizerInfo

`func (o *PromoCodeRoutingInstructionType) GetAuthorizerInfo() AuthorizerInfoType`

GetAuthorizerInfo returns the AuthorizerInfo field if non-nil, zero value otherwise.

### GetAuthorizerInfoOk

`func (o *PromoCodeRoutingInstructionType) GetAuthorizerInfoOk() (*AuthorizerInfoType, bool)`

GetAuthorizerInfoOk returns a tuple with the AuthorizerInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerInfo

`func (o *PromoCodeRoutingInstructionType) SetAuthorizerInfo(v AuthorizerInfoType)`

SetAuthorizerInfo sets AuthorizerInfo field to given value.

### HasAuthorizerInfo

`func (o *PromoCodeRoutingInstructionType) HasAuthorizerInfo() bool`

HasAuthorizerInfo returns a boolean if a field has been set.

### GetMembershipId

`func (o *PromoCodeRoutingInstructionType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *PromoCodeRoutingInstructionType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *PromoCodeRoutingInstructionType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *PromoCodeRoutingInstructionType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetComments

`func (o *PromoCodeRoutingInstructionType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *PromoCodeRoutingInstructionType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *PromoCodeRoutingInstructionType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *PromoCodeRoutingInstructionType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetActionType

`func (o *PromoCodeRoutingInstructionType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *PromoCodeRoutingInstructionType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *PromoCodeRoutingInstructionType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *PromoCodeRoutingInstructionType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetFolioNo

`func (o *PromoCodeRoutingInstructionType) GetFolioNo() int32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *PromoCodeRoutingInstructionType) GetFolioNoOk() (*int32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *PromoCodeRoutingInstructionType) SetFolioNo(v int32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *PromoCodeRoutingInstructionType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetPromptForAuthorizer

`func (o *PromoCodeRoutingInstructionType) GetPromptForAuthorizer() bool`

GetPromptForAuthorizer returns the PromptForAuthorizer field if non-nil, zero value otherwise.

### GetPromptForAuthorizerOk

`func (o *PromoCodeRoutingInstructionType) GetPromptForAuthorizerOk() (*bool, bool)`

GetPromptForAuthorizerOk returns a tuple with the PromptForAuthorizer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptForAuthorizer

`func (o *PromoCodeRoutingInstructionType) SetPromptForAuthorizer(v bool)`

SetPromptForAuthorizer sets PromptForAuthorizer field to given value.

### HasPromptForAuthorizer

`func (o *PromoCodeRoutingInstructionType) HasPromptForAuthorizer() bool`

HasPromptForAuthorizer returns a boolean if a field has been set.

### GetAutoPopulateRouting

`func (o *PromoCodeRoutingInstructionType) GetAutoPopulateRouting() bool`

GetAutoPopulateRouting returns the AutoPopulateRouting field if non-nil, zero value otherwise.

### GetAutoPopulateRoutingOk

`func (o *PromoCodeRoutingInstructionType) GetAutoPopulateRoutingOk() (*bool, bool)`

GetAutoPopulateRoutingOk returns a tuple with the AutoPopulateRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPopulateRouting

`func (o *PromoCodeRoutingInstructionType) SetAutoPopulateRouting(v bool)`

SetAutoPopulateRouting sets AutoPopulateRouting field to given value.

### HasAutoPopulateRouting

`func (o *PromoCodeRoutingInstructionType) HasAutoPopulateRouting() bool`

HasAutoPopulateRouting returns a boolean if a field has been set.

### GetCompPreApprovalRequired

`func (o *PromoCodeRoutingInstructionType) GetCompPreApprovalRequired() bool`

GetCompPreApprovalRequired returns the CompPreApprovalRequired field if non-nil, zero value otherwise.

### GetCompPreApprovalRequiredOk

`func (o *PromoCodeRoutingInstructionType) GetCompPreApprovalRequiredOk() (*bool, bool)`

GetCompPreApprovalRequiredOk returns a tuple with the CompPreApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPreApprovalRequired

`func (o *PromoCodeRoutingInstructionType) SetCompPreApprovalRequired(v bool)`

SetCompPreApprovalRequired sets CompPreApprovalRequired field to given value.

### HasCompPreApprovalRequired

`func (o *PromoCodeRoutingInstructionType) HasCompPreApprovalRequired() bool`

HasCompPreApprovalRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


