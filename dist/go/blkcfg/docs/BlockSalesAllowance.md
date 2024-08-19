# BlockSalesAllowance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SalesAllowances** | Pointer to [**[]BlockSalesAllowanceType**](BlockSalesAllowanceType.md) | Block&#39;s sales allowance information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockSalesAllowance

`func NewBlockSalesAllowance() *BlockSalesAllowance`

NewBlockSalesAllowance instantiates a new BlockSalesAllowance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSalesAllowanceWithDefaults

`func NewBlockSalesAllowanceWithDefaults() *BlockSalesAllowance`

NewBlockSalesAllowanceWithDefaults instantiates a new BlockSalesAllowance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *BlockSalesAllowance) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockSalesAllowance) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockSalesAllowance) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockSalesAllowance) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSalesAllowances

`func (o *BlockSalesAllowance) GetSalesAllowances() []BlockSalesAllowanceType`

GetSalesAllowances returns the SalesAllowances field if non-nil, zero value otherwise.

### GetSalesAllowancesOk

`func (o *BlockSalesAllowance) GetSalesAllowancesOk() (*[]BlockSalesAllowanceType, bool)`

GetSalesAllowancesOk returns a tuple with the SalesAllowances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesAllowances

`func (o *BlockSalesAllowance) SetSalesAllowances(v []BlockSalesAllowanceType)`

SetSalesAllowances sets SalesAllowances field to given value.

### HasSalesAllowances

`func (o *BlockSalesAllowance) HasSalesAllowances() bool`

HasSalesAllowances returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockSalesAllowance) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockSalesAllowance) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockSalesAllowance) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockSalesAllowance) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


