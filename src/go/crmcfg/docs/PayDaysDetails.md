# PayDaysDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PayDays** | Pointer to [**PayDaysType**](PayDaysType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPayDaysDetails

`func NewPayDaysDetails() *PayDaysDetails`

NewPayDaysDetails instantiates a new PayDaysDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayDaysDetailsWithDefaults

`func NewPayDaysDetailsWithDefaults() *PayDaysDetails`

NewPayDaysDetailsWithDefaults instantiates a new PayDaysDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PayDaysDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PayDaysDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PayDaysDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PayDaysDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPayDays

`func (o *PayDaysDetails) GetPayDays() PayDaysType`

GetPayDays returns the PayDays field if non-nil, zero value otherwise.

### GetPayDaysOk

`func (o *PayDaysDetails) GetPayDaysOk() (*PayDaysType, bool)`

GetPayDaysOk returns a tuple with the PayDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayDays

`func (o *PayDaysDetails) SetPayDays(v PayDaysType)`

SetPayDays sets PayDays field to given value.

### HasPayDays

`func (o *PayDaysDetails) HasPayDays() bool`

HasPayDays returns a boolean if a field has been set.

### GetWarnings

`func (o *PayDaysDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PayDaysDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PayDaysDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PayDaysDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


