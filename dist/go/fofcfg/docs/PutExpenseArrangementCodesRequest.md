# PutExpenseArrangementCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpenseArrangementCodes** | Pointer to [**[]ExpenseArrangementCodeType**](ExpenseArrangementCodeType.md) | Details for expense arrangement code along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutExpenseArrangementCodesRequest

`func NewPutExpenseArrangementCodesRequest() *PutExpenseArrangementCodesRequest`

NewPutExpenseArrangementCodesRequest instantiates a new PutExpenseArrangementCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutExpenseArrangementCodesRequestWithDefaults

`func NewPutExpenseArrangementCodesRequestWithDefaults() *PutExpenseArrangementCodesRequest`

NewPutExpenseArrangementCodesRequestWithDefaults instantiates a new PutExpenseArrangementCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpenseArrangementCodes

`func (o *PutExpenseArrangementCodesRequest) GetExpenseArrangementCodes() []ExpenseArrangementCodeType`

GetExpenseArrangementCodes returns the ExpenseArrangementCodes field if non-nil, zero value otherwise.

### GetExpenseArrangementCodesOk

`func (o *PutExpenseArrangementCodesRequest) GetExpenseArrangementCodesOk() (*[]ExpenseArrangementCodeType, bool)`

GetExpenseArrangementCodesOk returns a tuple with the ExpenseArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpenseArrangementCodes

`func (o *PutExpenseArrangementCodesRequest) SetExpenseArrangementCodes(v []ExpenseArrangementCodeType)`

SetExpenseArrangementCodes sets ExpenseArrangementCodes field to given value.

### HasExpenseArrangementCodes

`func (o *PutExpenseArrangementCodesRequest) HasExpenseArrangementCodes() bool`

HasExpenseArrangementCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PutExpenseArrangementCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutExpenseArrangementCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutExpenseArrangementCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutExpenseArrangementCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutExpenseArrangementCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutExpenseArrangementCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutExpenseArrangementCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutExpenseArrangementCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


