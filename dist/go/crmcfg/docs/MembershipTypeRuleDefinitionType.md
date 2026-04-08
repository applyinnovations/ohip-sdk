# MembershipTypeRuleDefinitionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleCode** | Pointer to **string** | Rule code of the membership type rule. | [optional] 
**ProgramType** | Pointer to [**MembershipTypeRuleType**](MembershipTypeRuleType.md) |  | [optional] 
**RuleAppliesOn** | Pointer to [**RuleAppliesOnType**](RuleAppliesOnType.md) |  | [optional] 
**NoOfTimesEligible** | Pointer to **int32** | Specifies total number of times program rule is eligible . | [optional] 
**RuleExportLabel** | Pointer to **string** | This field will be used to store export label and will be used only for exporting purposes. | [optional] 
**RuleExpirationDate** | Pointer to **string** | Date on which the rule will be expired. | [optional] 

## Methods

### NewMembershipTypeRuleDefinitionType

`func NewMembershipTypeRuleDefinitionType() *MembershipTypeRuleDefinitionType`

NewMembershipTypeRuleDefinitionType instantiates a new MembershipTypeRuleDefinitionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleDefinitionTypeWithDefaults

`func NewMembershipTypeRuleDefinitionTypeWithDefaults() *MembershipTypeRuleDefinitionType`

NewMembershipTypeRuleDefinitionTypeWithDefaults instantiates a new MembershipTypeRuleDefinitionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRuleCode

`func (o *MembershipTypeRuleDefinitionType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *MembershipTypeRuleDefinitionType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *MembershipTypeRuleDefinitionType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *MembershipTypeRuleDefinitionType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetProgramType

`func (o *MembershipTypeRuleDefinitionType) GetProgramType() MembershipTypeRuleType`

GetProgramType returns the ProgramType field if non-nil, zero value otherwise.

### GetProgramTypeOk

`func (o *MembershipTypeRuleDefinitionType) GetProgramTypeOk() (*MembershipTypeRuleType, bool)`

GetProgramTypeOk returns a tuple with the ProgramType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramType

`func (o *MembershipTypeRuleDefinitionType) SetProgramType(v MembershipTypeRuleType)`

SetProgramType sets ProgramType field to given value.

### HasProgramType

`func (o *MembershipTypeRuleDefinitionType) HasProgramType() bool`

HasProgramType returns a boolean if a field has been set.

### GetRuleAppliesOn

`func (o *MembershipTypeRuleDefinitionType) GetRuleAppliesOn() RuleAppliesOnType`

GetRuleAppliesOn returns the RuleAppliesOn field if non-nil, zero value otherwise.

### GetRuleAppliesOnOk

`func (o *MembershipTypeRuleDefinitionType) GetRuleAppliesOnOk() (*RuleAppliesOnType, bool)`

GetRuleAppliesOnOk returns a tuple with the RuleAppliesOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleAppliesOn

`func (o *MembershipTypeRuleDefinitionType) SetRuleAppliesOn(v RuleAppliesOnType)`

SetRuleAppliesOn sets RuleAppliesOn field to given value.

### HasRuleAppliesOn

`func (o *MembershipTypeRuleDefinitionType) HasRuleAppliesOn() bool`

HasRuleAppliesOn returns a boolean if a field has been set.

### GetNoOfTimesEligible

`func (o *MembershipTypeRuleDefinitionType) GetNoOfTimesEligible() int32`

GetNoOfTimesEligible returns the NoOfTimesEligible field if non-nil, zero value otherwise.

### GetNoOfTimesEligibleOk

`func (o *MembershipTypeRuleDefinitionType) GetNoOfTimesEligibleOk() (*int32, bool)`

GetNoOfTimesEligibleOk returns a tuple with the NoOfTimesEligible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfTimesEligible

`func (o *MembershipTypeRuleDefinitionType) SetNoOfTimesEligible(v int32)`

SetNoOfTimesEligible sets NoOfTimesEligible field to given value.

### HasNoOfTimesEligible

`func (o *MembershipTypeRuleDefinitionType) HasNoOfTimesEligible() bool`

HasNoOfTimesEligible returns a boolean if a field has been set.

### GetRuleExportLabel

`func (o *MembershipTypeRuleDefinitionType) GetRuleExportLabel() string`

GetRuleExportLabel returns the RuleExportLabel field if non-nil, zero value otherwise.

### GetRuleExportLabelOk

`func (o *MembershipTypeRuleDefinitionType) GetRuleExportLabelOk() (*string, bool)`

GetRuleExportLabelOk returns a tuple with the RuleExportLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleExportLabel

`func (o *MembershipTypeRuleDefinitionType) SetRuleExportLabel(v string)`

SetRuleExportLabel sets RuleExportLabel field to given value.

### HasRuleExportLabel

`func (o *MembershipTypeRuleDefinitionType) HasRuleExportLabel() bool`

HasRuleExportLabel returns a boolean if a field has been set.

### GetRuleExpirationDate

`func (o *MembershipTypeRuleDefinitionType) GetRuleExpirationDate() string`

GetRuleExpirationDate returns the RuleExpirationDate field if non-nil, zero value otherwise.

### GetRuleExpirationDateOk

`func (o *MembershipTypeRuleDefinitionType) GetRuleExpirationDateOk() (*string, bool)`

GetRuleExpirationDateOk returns a tuple with the RuleExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleExpirationDate

`func (o *MembershipTypeRuleDefinitionType) SetRuleExpirationDate(v string)`

SetRuleExpirationDate sets RuleExpirationDate field to given value.

### HasRuleExpirationDate

`func (o *MembershipTypeRuleDefinitionType) HasRuleExpirationDate() bool`

HasRuleExpirationDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


