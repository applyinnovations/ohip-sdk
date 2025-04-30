# BlockSalesAllowanceActivityLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockSalesAllowance** | Pointer to [**BlockSalesAllowanceActivityLogListType**](BlockSalesAllowanceActivityLogListType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockSalesAllowanceActivityLog

`func NewBlockSalesAllowanceActivityLog() *BlockSalesAllowanceActivityLog`

NewBlockSalesAllowanceActivityLog instantiates a new BlockSalesAllowanceActivityLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSalesAllowanceActivityLogWithDefaults

`func NewBlockSalesAllowanceActivityLogWithDefaults() *BlockSalesAllowanceActivityLog`

NewBlockSalesAllowanceActivityLogWithDefaults instantiates a new BlockSalesAllowanceActivityLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockSalesAllowance

`func (o *BlockSalesAllowanceActivityLog) GetBlockSalesAllowance() BlockSalesAllowanceActivityLogListType`

GetBlockSalesAllowance returns the BlockSalesAllowance field if non-nil, zero value otherwise.

### GetBlockSalesAllowanceOk

`func (o *BlockSalesAllowanceActivityLog) GetBlockSalesAllowanceOk() (*BlockSalesAllowanceActivityLogListType, bool)`

GetBlockSalesAllowanceOk returns a tuple with the BlockSalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSalesAllowance

`func (o *BlockSalesAllowanceActivityLog) SetBlockSalesAllowance(v BlockSalesAllowanceActivityLogListType)`

SetBlockSalesAllowance sets BlockSalesAllowance field to given value.

### HasBlockSalesAllowance

`func (o *BlockSalesAllowanceActivityLog) HasBlockSalesAllowance() bool`

HasBlockSalesAllowance returns a boolean if a field has been set.

### GetLinks

`func (o *BlockSalesAllowanceActivityLog) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockSalesAllowanceActivityLog) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockSalesAllowanceActivityLog) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockSalesAllowanceActivityLog) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockSalesAllowanceActivityLog) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockSalesAllowanceActivityLog) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockSalesAllowanceActivityLog) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockSalesAllowanceActivityLog) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


