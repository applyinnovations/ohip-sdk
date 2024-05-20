# MaturedDepositsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MaturedDeposits** | Pointer to [**[]MaturedDepositType**](MaturedDepositType.md) | Detailed information of matured deposits. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMaturedDepositsDetails

`func NewMaturedDepositsDetails() *MaturedDepositsDetails`

NewMaturedDepositsDetails instantiates a new MaturedDepositsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMaturedDepositsDetailsWithDefaults

`func NewMaturedDepositsDetailsWithDefaults() *MaturedDepositsDetails`

NewMaturedDepositsDetailsWithDefaults instantiates a new MaturedDepositsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MaturedDepositsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MaturedDepositsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MaturedDepositsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MaturedDepositsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMaturedDeposits

`func (o *MaturedDepositsDetails) GetMaturedDeposits() []MaturedDepositType`

GetMaturedDeposits returns the MaturedDeposits field if non-nil, zero value otherwise.

### GetMaturedDepositsOk

`func (o *MaturedDepositsDetails) GetMaturedDepositsOk() (*[]MaturedDepositType, bool)`

GetMaturedDepositsOk returns a tuple with the MaturedDeposits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaturedDeposits

`func (o *MaturedDepositsDetails) SetMaturedDeposits(v []MaturedDepositType)`

SetMaturedDeposits sets MaturedDeposits field to given value.

### HasMaturedDeposits

`func (o *MaturedDepositsDetails) HasMaturedDeposits() bool`

HasMaturedDeposits returns a boolean if a field has been set.

### GetWarnings

`func (o *MaturedDepositsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MaturedDepositsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MaturedDepositsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MaturedDepositsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


