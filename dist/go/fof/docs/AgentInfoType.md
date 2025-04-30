# AgentInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AgentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Name** | Pointer to **string** | Travel agent or source profile name. | [optional] 
**AlternateName** | Pointer to **string** | Alternate name of the agent or source profile. | [optional] 
**City** | Pointer to **string** | City of the travel agency or source profile. | [optional] 
**IATANo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileType** | Pointer to [**ProfileTypeType**](ProfileTypeType.md) |  | [optional] 
**CommissionCode** | Pointer to [**CommissionCodeType**](CommissionCodeType.md) |  | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**HoldReason** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**OnCommission** | Pointer to **bool** | Whether this agent/source has been paid or will be paid for commission. | [optional] 
**OnHold** | Pointer to **bool** | When set to true, commission for all the reservations associated with this agent is flagged as on hold. | [optional] 

## Methods

### NewAgentInfoType

`func NewAgentInfoType() *AgentInfoType`

NewAgentInfoType instantiates a new AgentInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentInfoTypeWithDefaults

`func NewAgentInfoTypeWithDefaults() *AgentInfoType`

NewAgentInfoTypeWithDefaults instantiates a new AgentInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccountId

`func (o *AgentInfoType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *AgentInfoType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *AgentInfoType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *AgentInfoType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetAgentId

`func (o *AgentInfoType) GetAgentId() UniqueIDType`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentInfoType) GetAgentIdOk() (*UniqueIDType, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentInfoType) SetAgentId(v UniqueIDType)`

SetAgentId sets AgentId field to given value.

### HasAgentId

`func (o *AgentInfoType) HasAgentId() bool`

HasAgentId returns a boolean if a field has been set.

### GetName

`func (o *AgentInfoType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AgentInfoType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AgentInfoType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AgentInfoType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAlternateName

`func (o *AgentInfoType) GetAlternateName() string`

GetAlternateName returns the AlternateName field if non-nil, zero value otherwise.

### GetAlternateNameOk

`func (o *AgentInfoType) GetAlternateNameOk() (*string, bool)`

GetAlternateNameOk returns a tuple with the AlternateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateName

`func (o *AgentInfoType) SetAlternateName(v string)`

SetAlternateName sets AlternateName field to given value.

### HasAlternateName

`func (o *AgentInfoType) HasAlternateName() bool`

HasAlternateName returns a boolean if a field has been set.

### GetCity

`func (o *AgentInfoType) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *AgentInfoType) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *AgentInfoType) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *AgentInfoType) HasCity() bool`

HasCity returns a boolean if a field has been set.

### GetIATANo

`func (o *AgentInfoType) GetIATANo() UniqueIDType`

GetIATANo returns the IATANo field if non-nil, zero value otherwise.

### GetIATANoOk

`func (o *AgentInfoType) GetIATANoOk() (*UniqueIDType, bool)`

GetIATANoOk returns a tuple with the IATANo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIATANo

`func (o *AgentInfoType) SetIATANo(v UniqueIDType)`

SetIATANo sets IATANo field to given value.

### HasIATANo

`func (o *AgentInfoType) HasIATANo() bool`

HasIATANo returns a boolean if a field has been set.

### GetProfileType

`func (o *AgentInfoType) GetProfileType() ProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *AgentInfoType) GetProfileTypeOk() (*ProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *AgentInfoType) SetProfileType(v ProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *AgentInfoType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetCommissionCode

`func (o *AgentInfoType) GetCommissionCode() CommissionCodeType`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *AgentInfoType) GetCommissionCodeOk() (*CommissionCodeType, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *AgentInfoType) SetCommissionCode(v CommissionCodeType)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *AgentInfoType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *AgentInfoType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *AgentInfoType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *AgentInfoType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *AgentInfoType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetHoldReason

`func (o *AgentInfoType) GetHoldReason() CodeDescriptionType`

GetHoldReason returns the HoldReason field if non-nil, zero value otherwise.

### GetHoldReasonOk

`func (o *AgentInfoType) GetHoldReasonOk() (*CodeDescriptionType, bool)`

GetHoldReasonOk returns a tuple with the HoldReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldReason

`func (o *AgentInfoType) SetHoldReason(v CodeDescriptionType)`

SetHoldReason sets HoldReason field to given value.

### HasHoldReason

`func (o *AgentInfoType) HasHoldReason() bool`

HasHoldReason returns a boolean if a field has been set.

### GetOnCommission

`func (o *AgentInfoType) GetOnCommission() bool`

GetOnCommission returns the OnCommission field if non-nil, zero value otherwise.

### GetOnCommissionOk

`func (o *AgentInfoType) GetOnCommissionOk() (*bool, bool)`

GetOnCommissionOk returns a tuple with the OnCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnCommission

`func (o *AgentInfoType) SetOnCommission(v bool)`

SetOnCommission sets OnCommission field to given value.

### HasOnCommission

`func (o *AgentInfoType) HasOnCommission() bool`

HasOnCommission returns a boolean if a field has been set.

### GetOnHold

`func (o *AgentInfoType) GetOnHold() bool`

GetOnHold returns the OnHold field if non-nil, zero value otherwise.

### GetOnHoldOk

`func (o *AgentInfoType) GetOnHoldOk() (*bool, bool)`

GetOnHoldOk returns a tuple with the OnHold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnHold

`func (o *AgentInfoType) SetOnHold(v bool)`

SetOnHold sets OnHold field to given value.

### HasOnHold

`func (o *AgentInfoType) HasOnHold() bool`

HasOnHold returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


