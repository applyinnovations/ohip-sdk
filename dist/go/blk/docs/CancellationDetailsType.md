# CancellationDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CancellationNumber** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CancellationCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**CancellationDate** | Pointer to **string** | Date on which block was canceled. | [optional] 
**CancellationInfo** | Pointer to **string** | Cancellation information provided by the customer. | [optional] 
**Destination** | Pointer to **string** | Alternate destination where the business is being taken. | [optional] 
**LostToProperty** | Pointer to **string** | Holds the name of the property or competitor brand business was lost to. | [optional] 

## Methods

### NewCancellationDetailsType

`func NewCancellationDetailsType() *CancellationDetailsType`

NewCancellationDetailsType instantiates a new CancellationDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancellationDetailsTypeWithDefaults

`func NewCancellationDetailsTypeWithDefaults() *CancellationDetailsType`

NewCancellationDetailsTypeWithDefaults instantiates a new CancellationDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCancellationNumber

`func (o *CancellationDetailsType) GetCancellationNumber() UniqueIDType`

GetCancellationNumber returns the CancellationNumber field if non-nil, zero value otherwise.

### GetCancellationNumberOk

`func (o *CancellationDetailsType) GetCancellationNumberOk() (*UniqueIDType, bool)`

GetCancellationNumberOk returns a tuple with the CancellationNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationNumber

`func (o *CancellationDetailsType) SetCancellationNumber(v UniqueIDType)`

SetCancellationNumber sets CancellationNumber field to given value.

### HasCancellationNumber

`func (o *CancellationDetailsType) HasCancellationNumber() bool`

HasCancellationNumber returns a boolean if a field has been set.

### GetCancellationCode

`func (o *CancellationDetailsType) GetCancellationCode() CodeDescriptionType`

GetCancellationCode returns the CancellationCode field if non-nil, zero value otherwise.

### GetCancellationCodeOk

`func (o *CancellationDetailsType) GetCancellationCodeOk() (*CodeDescriptionType, bool)`

GetCancellationCodeOk returns a tuple with the CancellationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationCode

`func (o *CancellationDetailsType) SetCancellationCode(v CodeDescriptionType)`

SetCancellationCode sets CancellationCode field to given value.

### HasCancellationCode

`func (o *CancellationDetailsType) HasCancellationCode() bool`

HasCancellationCode returns a boolean if a field has been set.

### GetCancellationDate

`func (o *CancellationDetailsType) GetCancellationDate() string`

GetCancellationDate returns the CancellationDate field if non-nil, zero value otherwise.

### GetCancellationDateOk

`func (o *CancellationDetailsType) GetCancellationDateOk() (*string, bool)`

GetCancellationDateOk returns a tuple with the CancellationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDate

`func (o *CancellationDetailsType) SetCancellationDate(v string)`

SetCancellationDate sets CancellationDate field to given value.

### HasCancellationDate

`func (o *CancellationDetailsType) HasCancellationDate() bool`

HasCancellationDate returns a boolean if a field has been set.

### GetCancellationInfo

`func (o *CancellationDetailsType) GetCancellationInfo() string`

GetCancellationInfo returns the CancellationInfo field if non-nil, zero value otherwise.

### GetCancellationInfoOk

`func (o *CancellationDetailsType) GetCancellationInfoOk() (*string, bool)`

GetCancellationInfoOk returns a tuple with the CancellationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationInfo

`func (o *CancellationDetailsType) SetCancellationInfo(v string)`

SetCancellationInfo sets CancellationInfo field to given value.

### HasCancellationInfo

`func (o *CancellationDetailsType) HasCancellationInfo() bool`

HasCancellationInfo returns a boolean if a field has been set.

### GetDestination

`func (o *CancellationDetailsType) GetDestination() string`

GetDestination returns the Destination field if non-nil, zero value otherwise.

### GetDestinationOk

`func (o *CancellationDetailsType) GetDestinationOk() (*string, bool)`

GetDestinationOk returns a tuple with the Destination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestination

`func (o *CancellationDetailsType) SetDestination(v string)`

SetDestination sets Destination field to given value.

### HasDestination

`func (o *CancellationDetailsType) HasDestination() bool`

HasDestination returns a boolean if a field has been set.

### GetLostToProperty

`func (o *CancellationDetailsType) GetLostToProperty() string`

GetLostToProperty returns the LostToProperty field if non-nil, zero value otherwise.

### GetLostToPropertyOk

`func (o *CancellationDetailsType) GetLostToPropertyOk() (*string, bool)`

GetLostToPropertyOk returns a tuple with the LostToProperty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLostToProperty

`func (o *CancellationDetailsType) SetLostToProperty(v string)`

SetLostToProperty sets LostToProperty field to given value.

### HasLostToProperty

`func (o *CancellationDetailsType) HasLostToProperty() bool`

HasLostToProperty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


