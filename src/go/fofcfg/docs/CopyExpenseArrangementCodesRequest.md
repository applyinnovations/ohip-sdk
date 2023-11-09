# CopyExpenseArrangementCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpenseArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the expense arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyExpenseArrangementCodesRequest

`func NewCopyExpenseArrangementCodesRequest() *CopyExpenseArrangementCodesRequest`

NewCopyExpenseArrangementCodesRequest instantiates a new CopyExpenseArrangementCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyExpenseArrangementCodesRequestWithDefaults

`func NewCopyExpenseArrangementCodesRequestWithDefaults() *CopyExpenseArrangementCodesRequest`

NewCopyExpenseArrangementCodesRequestWithDefaults instantiates a new CopyExpenseArrangementCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpenseArrangementCode

`func (o *CopyExpenseArrangementCodesRequest) GetExpenseArrangementCode() []CopyConfigurationCodeType`

GetExpenseArrangementCode returns the ExpenseArrangementCode field if non-nil, zero value otherwise.

### GetExpenseArrangementCodeOk

`func (o *CopyExpenseArrangementCodesRequest) GetExpenseArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetExpenseArrangementCodeOk returns a tuple with the ExpenseArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpenseArrangementCode

`func (o *CopyExpenseArrangementCodesRequest) SetExpenseArrangementCode(v []CopyConfigurationCodeType)`

SetExpenseArrangementCode sets ExpenseArrangementCode field to given value.

### HasExpenseArrangementCode

`func (o *CopyExpenseArrangementCodesRequest) HasExpenseArrangementCode() bool`

HasExpenseArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *CopyExpenseArrangementCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyExpenseArrangementCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyExpenseArrangementCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyExpenseArrangementCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyExpenseArrangementCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyExpenseArrangementCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyExpenseArrangementCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyExpenseArrangementCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


