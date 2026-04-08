# RoutingInstructionsMassUpdateCriteriaFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayeeInfo** | Pointer to [**MassUpdatePayeeInfoType**](MassUpdatePayeeInfoType.md) |  | [optional] 
**Instructions** | Pointer to [**[]MassUpdateRoutingInstructionType**](MassUpdateRoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutingInstructionsMassUpdateCriteriaFolio

`func NewRoutingInstructionsMassUpdateCriteriaFolio() *RoutingInstructionsMassUpdateCriteriaFolio`

NewRoutingInstructionsMassUpdateCriteriaFolio instantiates a new RoutingInstructionsMassUpdateCriteriaFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsMassUpdateCriteriaFolioWithDefaults

`func NewRoutingInstructionsMassUpdateCriteriaFolioWithDefaults() *RoutingInstructionsMassUpdateCriteriaFolio`

NewRoutingInstructionsMassUpdateCriteriaFolioWithDefaults instantiates a new RoutingInstructionsMassUpdateCriteriaFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayeeInfo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetPayeeInfo() MassUpdatePayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetPayeeInfoOk() (*MassUpdatePayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) SetPayeeInfo(v MassUpdatePayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetInstructions() []MassUpdateRoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetInstructionsOk() (*[]MassUpdateRoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) SetInstructions(v []MassUpdateRoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *RoutingInstructionsMassUpdateCriteriaFolio) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


