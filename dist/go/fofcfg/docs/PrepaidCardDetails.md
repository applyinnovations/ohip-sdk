# PrepaidCardDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrepaidCardDetails** | Pointer to [**PrepaidCardInfoType**](PrepaidCardInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPrepaidCardDetails

`func NewPrepaidCardDetails() *PrepaidCardDetails`

NewPrepaidCardDetails instantiates a new PrepaidCardDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrepaidCardDetailsWithDefaults

`func NewPrepaidCardDetailsWithDefaults() *PrepaidCardDetails`

NewPrepaidCardDetailsWithDefaults instantiates a new PrepaidCardDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrepaidCardDetails

`func (o *PrepaidCardDetails) GetPrepaidCardDetails() PrepaidCardInfoType`

GetPrepaidCardDetails returns the PrepaidCardDetails field if non-nil, zero value otherwise.

### GetPrepaidCardDetailsOk

`func (o *PrepaidCardDetails) GetPrepaidCardDetailsOk() (*PrepaidCardInfoType, bool)`

GetPrepaidCardDetailsOk returns a tuple with the PrepaidCardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardDetails

`func (o *PrepaidCardDetails) SetPrepaidCardDetails(v PrepaidCardInfoType)`

SetPrepaidCardDetails sets PrepaidCardDetails field to given value.

### HasPrepaidCardDetails

`func (o *PrepaidCardDetails) HasPrepaidCardDetails() bool`

HasPrepaidCardDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PrepaidCardDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PrepaidCardDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PrepaidCardDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PrepaidCardDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PrepaidCardDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PrepaidCardDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PrepaidCardDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PrepaidCardDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


