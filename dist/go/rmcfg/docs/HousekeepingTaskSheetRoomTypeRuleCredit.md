# HousekeepingTaskSheetRoomTypeRuleCredit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credits** | Pointer to **int32** | Specifies the base credits defined for each housekeeping room. This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM_TASK_RULE. | [optional] 
**TurndownCredits** | Pointer to **int32** | Specifies the turndown credits for each housekeeping room. This element will be used only if the TURNDOWN parameter is active and HOUSEKEEPING_CREDITS setting is set to a value other than NONE. | [optional] 

## Methods

### NewHousekeepingTaskSheetRoomTypeRuleCredit

`func NewHousekeepingTaskSheetRoomTypeRuleCredit() *HousekeepingTaskSheetRoomTypeRuleCredit`

NewHousekeepingTaskSheetRoomTypeRuleCredit instantiates a new HousekeepingTaskSheetRoomTypeRuleCredit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskSheetRoomTypeRuleCreditWithDefaults

`func NewHousekeepingTaskSheetRoomTypeRuleCreditWithDefaults() *HousekeepingTaskSheetRoomTypeRuleCredit`

NewHousekeepingTaskSheetRoomTypeRuleCreditWithDefaults instantiates a new HousekeepingTaskSheetRoomTypeRuleCredit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetCredits() int32`

GetCredits returns the Credits field if non-nil, zero value otherwise.

### GetCreditsOk

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetCreditsOk() (*int32, bool)`

GetCreditsOk returns a tuple with the Credits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) SetCredits(v int32)`

SetCredits sets Credits field to given value.

### HasCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) HasCredits() bool`

HasCredits returns a boolean if a field has been set.

### GetTurndownCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetTurndownCredits() int32`

GetTurndownCredits returns the TurndownCredits field if non-nil, zero value otherwise.

### GetTurndownCreditsOk

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetTurndownCreditsOk() (*int32, bool)`

GetTurndownCreditsOk returns a tuple with the TurndownCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) SetTurndownCredits(v int32)`

SetTurndownCredits sets TurndownCredits field to given value.

### HasTurndownCredits

`func (o *HousekeepingTaskSheetRoomTypeRuleCredit) HasTurndownCredits() bool`

HasTurndownCredits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


