# RoutingInstructionsToChangeCriteriaComp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompAccountingInfo** | Pointer to [**CompAccountingType**](CompAccountingType.md) |  | [optional] 
**CompRequestInfo** | Pointer to [**CompRoutingRequestType**](CompRoutingRequestType.md) |  | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutingInstructionsToChangeCriteriaComp

`func NewRoutingInstructionsToChangeCriteriaComp() *RoutingInstructionsToChangeCriteriaComp`

NewRoutingInstructionsToChangeCriteriaComp instantiates a new RoutingInstructionsToChangeCriteriaComp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsToChangeCriteriaCompWithDefaults

`func NewRoutingInstructionsToChangeCriteriaCompWithDefaults() *RoutingInstructionsToChangeCriteriaComp`

NewRoutingInstructionsToChangeCriteriaCompWithDefaults instantiates a new RoutingInstructionsToChangeCriteriaComp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompAccountingInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) GetCompAccountingInfo() CompAccountingType`

GetCompAccountingInfo returns the CompAccountingInfo field if non-nil, zero value otherwise.

### GetCompAccountingInfoOk

`func (o *RoutingInstructionsToChangeCriteriaComp) GetCompAccountingInfoOk() (*CompAccountingType, bool)`

GetCompAccountingInfoOk returns a tuple with the CompAccountingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAccountingInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) SetCompAccountingInfo(v CompAccountingType)`

SetCompAccountingInfo sets CompAccountingInfo field to given value.

### HasCompAccountingInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) HasCompAccountingInfo() bool`

HasCompAccountingInfo returns a boolean if a field has been set.

### GetCompRequestInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) GetCompRequestInfo() CompRoutingRequestType`

GetCompRequestInfo returns the CompRequestInfo field if non-nil, zero value otherwise.

### GetCompRequestInfoOk

`func (o *RoutingInstructionsToChangeCriteriaComp) GetCompRequestInfoOk() (*CompRoutingRequestType, bool)`

GetCompRequestInfoOk returns a tuple with the CompRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRequestInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) SetCompRequestInfo(v CompRoutingRequestType)`

SetCompRequestInfo sets CompRequestInfo field to given value.

### HasCompRequestInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) HasCompRequestInfo() bool`

HasCompRequestInfo returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *RoutingInstructionsToChangeCriteriaComp) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *RoutingInstructionsToChangeCriteriaComp) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsToChangeCriteriaComp) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsToChangeCriteriaComp) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsToChangeCriteriaComp) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsToChangeCriteriaComp) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *RoutingInstructionsToChangeCriteriaComp) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *RoutingInstructionsToChangeCriteriaComp) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *RoutingInstructionsToChangeCriteriaComp) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *RoutingInstructionsToChangeCriteriaComp) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


